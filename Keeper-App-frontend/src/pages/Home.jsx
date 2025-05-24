import React, { useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import Swal from "sweetalert2";
import axios from 'axios'
import useNotes from "../zustand/useNotes";


function Home() {
    const msgStyle = {
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        height: "50vh",
        color: "#aaa",
        letterSpacing: "1px",
        fontSize: "1.3em",
    };

  const {notes, setNotes} = useNotes();
  const navigate = useNavigate();

  
 
  useEffect(() => {
        const fetchNotes = () => {
            axios
                .get("https://keeperapp-47lk.onrender.com/allNotes")
                .then((res) => {
                    if (res.data.content) {
                        setNotes(res.data.content);
                    } else {
                        setNotes([]);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchNotes();
    }, []);

  /*function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }*/

  const deleteNote = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`https://keeperapp-47lk.onrender.com/deleteNote/${id}`)
                    .then(() => {
                        const fetchNotes = () => {
            axios
                .get("https://keeperapp-47lk.onrender.com/allNotes")
                .then((res) => {
                    if (res.data.content) {
                        setNotes(res.data.content);
                    } else {
                        setNotes([]);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
                        fetchNotes();
                        Swal.fire(
                            "Deleted!",
                            "Your Note has been deleted.",
                            "success"
                        );
                    })
                    .catch((err) => console.error(err));
            } else {
                return;
            }
        });
    };

  return (
    <div>
      <Header />
      <CreateArea />
      {notes && notes.length>0?  (notes.map((noteItem) => {
        return ( 
          <Note 
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            
        />
        );
      })):(<p style={msgStyle}>No Notes To Show</p>)}
      <Footer />
    </div>
  );
}

export default Home;
