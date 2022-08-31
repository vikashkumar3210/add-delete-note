import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form
        onSubmit={function () {
          props.Clicked(event);
        }}
      >
        <input
          name="title"
          onChange={function () {
            props.Changed(event);
          }}
          placeholder="Title"
            value={props.values.title}
        />
        <textarea
          name="content"
          onChange={function () {
            props.Changed(event);
          }}
          placeholder="Take a note..."
          rows="3"
          value={props.values.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
