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
import NoteIconsBar from "./NoteIconsBar";


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

  return (
		<>
		<div className="note" style={{backgroundColor:props.color}} >
			<div onClick={handleClickOpen}>
				<h1>{props.title}</h1>
				<p>{props.content}</p>
			</div>
			<NoteIconsBar id={props.id} color={props.color} title={props.title} content={props.content} />
    </div>
		<Dialog onClose={handleClose} open={open} >
			<PopNote id={props.id} color={props.color} title={props.title} content={props.content} close={handleClose}/>
		</Dialog>
	</>
  );
}

export default Note;
