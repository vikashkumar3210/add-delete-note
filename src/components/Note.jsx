import React from "react";

function Note(props) {
  console.log(props);
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={function () {
          props.dClicked(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
