import { loadNotes } from "./sockets.js";
import { onHandleSummit } from "./ui.js";

loadNotes();

const noteForm = document.querySelector("#noteForm");
noteForm.addEventListener("submit", onHandleSummit);
