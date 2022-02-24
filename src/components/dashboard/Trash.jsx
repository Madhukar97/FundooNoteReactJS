import React, { Component, useState, useEffect } from "react";
import DisplayNote from "./DisplayNote";
import { NoteServices } from "../../services/NoteService";

function Trash(props) {

  let noteService = new NoteServices();

	let [notes, setNotes] = useState({
		notesArray: []
	});

	let getNotes = () => {
		noteService.getAllNotes().then(function (response){
			setNotes(() => ({
				notesArray: response.data
			}))
			console.log(notes.notesArray)
		}).catch(function (error) {
			console.log(error);
		});
	}

	useEffect(()=>{getNotes()},[])
	
  return(
    <>
			<h2>Trash</h2>
			<hr />
      <div className="notes-container">
				{notes.notesArray.length > 0 && notes.notesArray.map((note, index) => (
            note.inTrash?
						<DisplayNote className="noteItem" key={index} id={note.id} color={note.color} title={note.title} content={note.content} archived={note.archived} inTrash={note.inTrash} getNotes={getNotes}/>
            :
            <div key={index}></div>
				))}
			</div>
    </>
  )
}

export default Trash;