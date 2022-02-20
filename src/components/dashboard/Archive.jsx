import React from "react";
import DisplayNote from "./DisplayNote";

function Archive (props) {

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

	getNotes();
	
  return(
    <>
      <div className="notes-container">
				{notes.notesArray.length > 0 && notes.notesArray.map((note, index) => ( 
            note.archived?
						<DisplayNote className="noteItem" key={index} id={note.id} color={note.color} title={note.title} content={note.content} />
            :
            <div></div>
				))}
			</div>
    </>
  )

}

export default Archive;