import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    var input = event.target.name;
    var inputValue = event.target.value;
    return setNote(function (prevValue) {
      return { ...prevValue, [input]: inputValue };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    return setNote({ title: "", content: "" });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
