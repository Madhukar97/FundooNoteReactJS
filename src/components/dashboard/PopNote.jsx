import { AddAlertOutlined, ArchiveOutlined, BrushOutlined, CheckBoxOutlined, ColorLensOutlined, ImageOutlined, MoreVertOutlined, PersonAddAlt, PersonAddAltOutlined, PushPinOutlined } from "@mui/icons-material";
import { IconButton, TextareaAutosize } from "@mui/material";
import React, { Component, useState } from "react";
import { UserServices } from "../../services/UserService";
import "./createArea.scss";
import '../dashboard/PopNote.scss'

function PopNote(props) {
  let userService = new UserServices();

  let [note, setNote] = useState({
    title: props.title,
    content: props.content,
    id: props.id,
    color: props.color
  });

  let [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive)
  }

  const onChangeHandler = (event) => {
    setNote(() => ({
      ...note,
      [event.target.name]: event.target.value,
    }));
  };

  let submitButton = (event) => {
    onClick();
    event.preventDefault();
    props.close();
    if(note.title!=='' || note.content!==''){
    
    userService.updateNote(props.id, note).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log(props);
    }
  }

  return (
    <>
    {
      <div >
        <form className="PopNote" style={{backgroundColor:props.color}}>
          <div className="title-div" >
          <input
            className="title"
            name="title"
            type="text"
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={onChangeHandler}
            style={{backgroundColor:props.color}}
          />
          <IconButton className="icon-button">
            <PushPinOutlined/>
          </IconButton>
          </div>
          <p>
            <TextareaAutosize
              className="textarea"
              name="content"
              placeholder="Take a note..."
              value={note.content}
              onChange={onChangeHandler}
              style={{backgroundColor:props.color}}
            ></TextareaAutosize>
          </p>
          <div className="create-note-buttons">
          <IconButton className="create-note-button">
            <AddAlertOutlined fontSize="small"/>
          </IconButton>
          <IconButton className="create-note-button">
            <PersonAddAltOutlined fontSize="small"/>
          </IconButton>
          <IconButton className="create-note-button">
            <ColorLensOutlined fontSize="small"/>
          </IconButton>
          <IconButton className="create-note-button">
            <ImageOutlined fontSize="small"/>
          </IconButton>
          <IconButton className="create-note-button">
            <ArchiveOutlined fontSize="small"/>
          </IconButton>
          <IconButton className="create-note-button">
            <MoreVertOutlined fontSize="small"/>
          </IconButton>
          <button className="add-button" onClick={submitButton} style={{backgroundColor:props.color}}>Close</button>
          </div>
        </form>
      </div>
    }
      
    </>
  );
}

export default PopNote;
