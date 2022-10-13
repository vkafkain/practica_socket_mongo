import { saveNote } from "./sockets.js";

export const onHandleSummit = (e) => {
  e.preventDefault();

  saveNote(noteForm["title"].value, noteForm["description"].value);
};
