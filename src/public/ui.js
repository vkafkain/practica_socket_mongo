import { saveNote } from "./sockets.js";

const notesList = document.querySelector("#notes");

const noteUI = (note) => {
  const div = document.createElement("div");
  div.innerHTML = notesList.innerHTML += `
  
  <div>
    <h1>${note.title}</h1>
    <div>
    <button>Delete</button>
    <button>Update</button>
    </div>
    <p>${note.description}</p>
  </div>
  `;
  return div;
};

export const renderNotes = (notes) => {
  notes.forEach((note) => notesList.append(noteUI(note)));
};

export const onHandleSummit = (e) => {
  e.preventDefault();

  saveNote(noteForm["title"].value, noteForm["description"].value);
};

export const appendNote = note => {
  notesList.append(noteUI(note))
}