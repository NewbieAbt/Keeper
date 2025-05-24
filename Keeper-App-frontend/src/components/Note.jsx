import React from "react";
import { Link } from "react-router-dom";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
      <Link to={`/edit/${props.id}`} style={{color: '#f5400f'}}><button>EDIT</button></Link>
    </div>
  );
}

export default Note;
