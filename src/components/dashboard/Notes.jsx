import React, { Component, useState, useEffect } from "react";
import CreateNote from "./CreateNote"
import DisplayNote from "./DisplayNote";
import "../dashboard/Notes.scss"
import { NoteServices } from "../../services/NoteService";

const Notes = (props) => {

	let noteService = new NoteServices();

	let [notes, setNotes] = useState({
		notesArray: []
	});

	let getNotes = () => {
		noteService.getAllNotes().then(function (response){
			setNotes(() => ({
				notesArray: response.data
			}))
		}).catch(function (error) {
			console.log(error);
		});
	}

	useEffect(() => {getNotes()},[])

  return (
		<>
		<CreateNote getNotes={getNotes} />
		<div className="notes-container">
		{notes.notesArray.length > 0 && notes.notesArray.map((note, index) => (
			(note.archived || note.inTrash)?
			<div key={index}></div>
			:
			<DisplayNote className="noteItem" key={index} id={note.id} color={note.color} title={note.title} content={note.content} archived={note.archived} inTrash={note.inTrash} getNotes={getNotes}/>
		))}
		</div>
		</>
	);
};
export default Notes;
