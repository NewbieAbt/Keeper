import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";


export default function EditForm() {

    const {id} = useParams();
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    useEffect(() => {
        axios
            .get(`http://localhost:5000/noteDetails/${id}`)
            .then((res) => {
                setNote(res.data.content);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setNote({ ...note, [name]: value });
    }



    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        axios
            .patch(`http://localhost:5000/updateNote/${id}`, note)
            .then(() => {
                navigate(`/`);
                Swal.fire('Your note has been updated successfully!')
            })
            .catch((err) => console.error(err));
    }
    return(
        <div>
            <form>
                <input 
                name="title" 
                onChange={changeHandler} 
                value={note.title}
                />
                <textarea 
                onChange={changeHandler}
                name="content"
                value={note.content} 
                rows="3"
                 />
                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
};
