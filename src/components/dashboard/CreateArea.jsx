import React, { Component } from "react";
import "./createArea.scss";

function CreateArea() {
  return (
    <>
      <div>
        <form className="CreateArea">
          <input type="text" placeholder="Title" name="title" />
          <p>
            <textarea name="context" placeholder="Take a note..."></textarea>
          </p>
        </form>
      </div>
    </>
  );
}

export default CreateArea;
