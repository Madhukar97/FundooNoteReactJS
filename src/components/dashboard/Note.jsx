import { DeleteOutlined, ColorLensOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { color, display } from "@mui/system";
import React, { useState } from "react";
import "../dashboard/Note.scss";
import { UserServices } from "../../services/UserService";
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import CreateArea from "./CreateArea";
import PopNote from "./PopNote";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect } from "react";

Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

function Note(props) {
  let userService = new UserServices();

	const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  let deleteNote = (event) => {
    userService.deleteNote(props.id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

	let color = props.color;

	let [note, setNote] = useState({
    title: props.title,
    content: props.content,
    id: props.id,
    color: props.color
	
  });

	let setNoteColor = (event) => {
		console.log(event.target.id);
		setNote({
				...note,
				color: event.target.id
		});
		updateNote();
		props.getNotes();
	}

	let updateNote = () => {

		userService.updateNote(props.id, note).then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
		
		console.log(props);
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
		<div className="note" style={{backgroundColor:props.color}} >
			<div onClick={handleClickOpen}>
				<h1>{props.title}</h1>
				<p>{props.content}</p>
			</div>
      
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <IconButton onClick={deleteNote}>
          <DeleteOutlined></DeleteOutlined>
        </IconButton>
				<IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
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
      </div>
    </div>
		<Dialog onClose={handleClose} open={open} >
			<PopNote id={props.id} color={props.color} title={props.title} content={props.content} close={handleClose}/>
		</Dialog>
	</>
  );
}

export default Note;
