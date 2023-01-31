import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const[isExpanded, setExpanded]= useState(false);
  const[note, setNote]= useState({
    title: "",
    content: ""
  });
  function handleChange(event){
  const{name, value}= event.target;
  setNote(preNote => {return{...preNote, [name]: value};});
  }
  function handleClick(event){
    props.onAdd(note);
    setNote({
    title: "",
    content: ""
  });
    event.preventDefault();
  }
  function handleTap(){
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />}
        <textarea onClick={handleTap} onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
        <Fab onClick={handleClick}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
