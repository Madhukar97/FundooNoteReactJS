import { AddAlertOutlined, ArchiveOutlined, BrushOutlined, CheckBoxOutlined, ColorLensOutlined, ImageOutlined, MoreVertOutlined, PersonAddAlt, PersonAddAltOutlined, PushPinOutlined } from "@mui/icons-material";
import { IconButton, TextareaAutosize } from "@mui/material";
import React, { Component, useState } from "react";
import { UserServices } from "../../services/UserService";
import "./createArea.scss";

function CreateArea(props) {
  let userService = new UserServices();

  let [note, setNote] = useState({
    title: "",
    content: "",
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
    if(note.title!=='' || note.content!==''){
    
    userService.addNote(note).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setNote(()=>({
      title: "",
      content: "",
    }))
    console.log(props);
    }
  }

  return (
    <>
    {
      isActive ?
      <div >
        <form className="CreateArea">
          <div className="title-div" >
          <input
            className="title"
            name="title"
            type="text"
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={onChangeHandler}
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
            ></TextareaAutosize>
          </p>
          <div className="create-note-buttons">
          <IconButton className="create-note-button">
            <AddAlertOutlined fontSize="small"/>
          </IconButton>
          <IconButton className="create-note-button">
            <PersonAddAltOutlined fontSize="small"/>
          </IconButton>
          <IconButton className="create-note-button" >
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
          <button className="add-button" onClick={submitButton}>Add</button>
          </div>
        </form>
      </div>
      :
      <div>
        <form className="CreateArea">
          <div className="title-div" >
          <input
            className="title"
            name="title"
            type="text"
            placeholder="Take a note..."
            name="title"
            value={note.title}
            onChange={onChangeHandler}
            onClick={onClick}
          />
          <IconButton className="icon-button">
            <CheckBoxOutlined/>
          </IconButton>
          <IconButton className="icon-button">
            <BrushOutlined/>
          </IconButton>
          <IconButton className="icon-button">
            <ImageOutlined/>
          </IconButton>
          </div>
        </form>
        </div>
    }
      
    </>
  );
}

export default CreateArea;
