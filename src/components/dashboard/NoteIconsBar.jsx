import React, { useState } from "react";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { NoteServices } from "../../services/NoteService";
import { DeleteOutlined, AddAlertOutlined, ArchiveOutlined, BrushOutlined, CheckBoxOutlined, ColorLensOutlined, ImageOutlined, MoreVertOutlined, PersonAddAlt, PersonAddAltOutlined, PushPinOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";


function NoteIconsBar(props) {

	let noteService = new NoteServices();
	
	let deleteNote = (event) => {

   let updatedNote = {
			title: props.title,
    	content: props.content,
    	id: props.id,
			color: props.color,
      archived: props.archived,
      inTrash: !(props.inTrash)
		}

    noteService.updateNote(props.id,updatedNote).then(function (response) {
			console.log(response);
      props.getNotes();
		})
		.catch(function (error) {
			console.log(error);
		});
  };

  let archiveNote = (event) => {
    let updatedNote = {
			title: props.title,
    	content: props.content,
    	id: props.id,
			color: props.color,
      archived: !(props.archived),
      inTrash: props.inTrash
		}

    noteService.updateNote(props.id,updatedNote).then(function (response) {
			console.log(response);
      props.getNotes();
		})
		.catch(function (error) {
			console.log(error);
		});
  }

	let setNoteColor = (event) => {
		let updatedNote = {
			title: props.title,
    	content: props.content,
    	id: props.id,
			color: event.target.id,
      archived: props.archived,
      inTrash: props.inTrash
		}
		updateNote(props.id, updatedNote);
	}

	let updateNote = (a,b) => {
		noteService.updateNote(a,b).then(function (response) {
			console.log(response);
      props.getNotes();
		})
		.catch(function (error) {
			console.log(error);
		});
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

  return(
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

				<IconButton className="create-note-button" onClick={archiveNote}>
            <ArchiveOutlined fontSize="small"/>
        </IconButton>
				<IconButton className="create-note-button">
            <ImageOutlined fontSize="small"/>
        </IconButton>
				<IconButton className="create-note-button">
            <PersonAddAltOutlined fontSize="small"/>
        </IconButton>
				<IconButton className="create-note-button">
            <AddAlertOutlined fontSize="small"/>
        </IconButton>
      </div>
	);

}

export default NoteIconsBar;