import React, { Component, useState, useEffect } from "react";
import CreateNote from "./CreateNote"
import DisplayNote from "./DisplayNote";
import "../dashboard/Notes.scss"
import { UserServices } from "../../services/UserService";

const Notes = (props) => {

	let userService = new UserServices();

	let [notes, setNotes] = useState({
		notesArray: []
	});

	let getNotes = () => {
		userService.getAllNotes().then(function (response){
			setNotes(() => ({
				notesArray: response.data
			}))
		}).catch(function (error) {
			console.log(error);
		});
	}

	useEffect(() => {getNotes()});

  return (
		<>
		<CreateNote getNotes={getNotes} />
		<div className="notes-container">
		{notes.notesArray.length > 0 && notes.notesArray.map((note, index) => (
			<DisplayNote className="noteItem" key={index} id={note.id} color={note.color} title={note.title} content={note.content} />
		))}
		</div>
		</>
	);
};
export default Notes;
