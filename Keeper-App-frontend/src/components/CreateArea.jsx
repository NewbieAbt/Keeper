import React, { useState } from "react";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import useNotes from "../zustand/useNotes";
function CreateArea(){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const {notes,setNotes} = useNotes();


    function handleChange(event) {
       const { name, value } = event.target;

       setNote(prevNote => {
           return {
               ...prevNote,
               [name] : value
           };
       });
    }
    const navigate = useNavigate();
    const submitNote = (event) => {
      event.preventDefault();
      axios
        .post(`https://keeperapp-47lk.onrender.com/addNote`, note)
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

          Swal.fire({
            title: 'Your note has been added successfully!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        })
        .catch((err) => {console.log(err)});
    };

    return(
        <div>
            <form>
                <input 
                name="title" 
                onChange={handleChange} 
                value={note.title} 
                placeholder="Title"
                />
                <textarea 
                onChange={handleChange}
                name="content" 
                value={note.content} 
                placeholder="Take a note..." 
                rows="3"
                 />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea 
