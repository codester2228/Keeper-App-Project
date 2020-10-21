import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    return setNotes(function (prevValue) {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setNotes(function (prevNotes) {
      return prevNotes.filter(function (item, index) {
        return id !== index;
      });
    });
  }

  function printNotes(item, index) {
    return (
      <Note
        key={index}
        id={index}
        title={item.title}
        content={item.content}
        onDelete={deleteNote}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(printNotes)}
    </div>
  );
}

export default App;
