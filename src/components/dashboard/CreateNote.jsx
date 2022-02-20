import { AddAlertOutlined, ArchiveOutlined, BrushOutlined, CheckBoxOutlined, ColorLensOutlined, ImageOutlined, MoreVertOutlined, PersonAddAlt, PersonAddAltOutlined, PushPinOutlined } from "@mui/icons-material";
import { IconButton, TextareaAutosize } from "@mui/material";
import React, { Component, useState } from "react";
import { UserServices } from "../../services/UserService";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import "./createNote.scss";

function CreateNote (props) {
  let userService = new UserServices();

  let [note, setNote] = useState({
    title: "",
    content: "",
    color: 'white'
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

  const setNoteColor = (event) => {
    setNote(() => ({
      ...note,
      color : event.target.id
    }));
  }

  let submitButton = (event) => {
    onClick();
    event.preventDefault();
    if(note.title!=='' || note.content!==''){
    
    userService.addNote(note).then(function (response) {
      console.log(response);
      props.getNotes();
    })
    .catch(function (error) {
      console.log(error);
    });

    setNote(()=>({
      title: "",
      content: "",
      color: 'white'
    }))
    console.log(props);
    }
    
  }

	const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseColorPallet = () => {
    setAnchorEl(null);
  };

  const openColorPallet = Boolean(anchorEl);
  const id = openColorPallet ? 'simple-popover' : undefined;

  return (
    <>
    {
      isActive ?
      <div >
        <form className="CreateArea" style={{backgroundColor:note.color}}>
          <div className="title-div" >
          <input
            className="title"
            name="title"
            type="text"
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={onChangeHandler}
            style={{backgroundColor:note.color}}
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
              style={{backgroundColor:note.color}}
            ></TextareaAutosize>
          </p>
          <div className="create-note-buttons">
          <IconButton className="create-note-button">
            <AddAlertOutlined fontSize="small"/>
          </IconButton>
          <IconButton className="create-note-button">
            <PersonAddAltOutlined fontSize="small"/>
          </IconButton>
          <IconButton className="create-note-button" aria-describedby={id} variant="contained" onClick={handleClick} >
            <ColorLensOutlined fontSize="small"/>
          </IconButton>
          <Popover
          id={id}
          open={openColorPallet}
          anchorEl={anchorEl}
          onClose={handleCloseColorPallet}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography component={'span'} style={{display:'flex',flexDirection:'row',padding:'8px'}}>
            <div id="#ffff7e" onClick={setNoteColor} style={{width:'30px',height:'30px',border:'1px solid grey',borderRadius:'100%',boxShadow:'0 2px 3px #ffff7e', backgroundColor:'#ffff7e', margin:'0 2px', cursor:'pointer'}}></div>
            <div id="#E6E6FA" onClick={setNoteColor} style={{width:'30px',height:'30px',border:'1px solid grey',borderRadius:'100%',boxShadow:'0 2px 3px #E6E6FA', backgroundColor:'#E6E6FA', margin:'0 2px', cursor:'pointer'}}></div>
            <div id="#DDA0DD" onClick={setNoteColor} style={{width:'30px',height:'30px',border:'1px solid grey',borderRadius:'100%',boxShadow:'0 2px 3px #DDA0DD', backgroundColor:'#DDA0DD', margin:'0 2px', cursor:'pointer'}}></div>
            <div id="#FFFACD" onClick={setNoteColor} style={{width:'30px',height:'30px',border:'1px solid grey',borderRadius:'100%',boxShadow:'0 2px 3px #FFFACD', backgroundColor:'#FFFACD', margin:'0 2px', cursor:'pointer'}}></div>
            <div id="#90EE90" onClick={setNoteColor} style={{width:'30px',height:'30px',border:'1px solid grey',borderRadius:'100%',boxShadow:'0 2px 3px #90EE90', backgroundColor:'#90EE90', margin:'0 2px', cursor:'pointer'}}></div>
            <div id="#FFF0F5" onClick={setNoteColor} style={{width:'30px',height:'30px',border:'1px solid grey',borderRadius:'100%',boxShadow:'0 2px 3px #FFF0F5', backgroundColor:'#FFF0F5', margin:'0 2px', cursor:'pointer'}}></div>
            <div id="#C0C0C0" onClick={setNoteColor} style={{width:'30px',height:'30px',border:'1px solid grey',borderRadius:'100%',boxShadow:'0 2px 3px #C0C0C0', backgroundColor:'#C0C0C0', margin:'0 2px', cursor:'pointer'}}></div>
            <div id="#87CEFA" onClick={setNoteColor} style={{width:'30px',height:'30px',border:'1px solid grey',borderRadius:'100%',boxShadow:'0 2px 3px #87CEFA', backgroundColor:'#87CEFA', margin:'0 2px', cursor:'pointer'}}></div>
            <div id="#40E0D0" onClick={setNoteColor} style={{width:'30px',height:'30px',border:'1px solid grey',borderRadius:'100%',boxShadow:'0 2px 3px #40E0D0', backgroundColor:'#40E0D0', margin:'0 2px', cursor:'pointer'}}></div>
            <div id="#BDB76B" onClick={setNoteColor} style={{width:'30px',height:'30px',border:'1px solid grey',borderRadius:'100%',boxShadow:'0 2px 3px #BDB76B', backgroundColor:'#BDB76B', margin:'0 2px', cursor:'pointer'}}></div>
            <div id="#F08080" onClick={setNoteColor} style={{width:'30px',height:'30px',border:'1px solid grey',borderRadius:'100%',boxShadow:'0 2px 3px #F08080', backgroundColor:'#F08080', margin:'0 2px', cursor:'pointer'}}></div>
          </Typography>
          </Popover>

          <IconButton className="create-note-button">
            <ImageOutlined fontSize="small"/>
          </IconButton>
          <IconButton className="create-note-button">
            <ArchiveOutlined fontSize="small"/>
          </IconButton>
          <IconButton className="create-note-button">
            <MoreVertOutlined fontSize="small"/>
          </IconButton>
          <button className="add-button" onClick={submitButton} style={{backgroundColor:note.color}}>Add</button>
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

export default CreateNote;
