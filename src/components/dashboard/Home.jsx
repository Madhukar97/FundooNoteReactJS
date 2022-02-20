import React, { Component, useState, useEffect } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea"
import MiniDrawer from "./Dashboard";
import Note from "./Note";
import "../dashboard/Home.scss"
import { UserServices } from "../../services/UserService";

const Home = (props) => {

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
		<CreateArea getNotes={getNotes} />
		<div className="notes-container">
		{notes.notesArray.length > 0 && notes.notesArray.map((note, index) => (
			<Note className="noteItem" key={index} id={note.id} color={note.color} title={note.title} content={note.content} />
		))}
		</div>
		</>
	);
};
export default Home;
