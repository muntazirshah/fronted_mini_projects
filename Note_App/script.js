document.addEventListener("DOMContentLoaded", loadNotes);

const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");


function loadNotes() {
    notesContainer.innerHTML = "";
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach((note, index) => createNoteElement(note, index));
}

// Add a new note
addNoteBtn.addEventListener("click", () => {
    let noteText = noteInput.value.trim();
    if (noteText === "") return;

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));

    createNoteElement(noteText, notes.length - 1);
    noteInput.value = "";
});

//create a note element 
function createNoteElement(text, index) {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
    `;
    notesContainer.appendChild(noteDiv);
}

// Delete a note
function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes(); 
}
