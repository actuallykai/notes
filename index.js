var noteData = {};

var noteContainer = document.querySelector(".note-container");
var noteNameInput = document.querySelector("#note-name");
var noteContentInput = document.querySelector("#note-content");


function refreshNotes(newNoteData) {
    noteContainer.textContent = "";
    for (let i = 0; i < newNoteData.length; i++) {
        noteContainer.appendChild(
            newNoteData[newNoteData.keys()[i]].element
        );
    }
}

function displayNote(noteName, noteContent) {
    var note = document.createElement("div");
    note.classList.add("note");

    var noteNameElem = document.createElement("h3");
    noteNameElem.classList.add("note-name");
    noteNameElem.innerHTML = noteName;

    var noteContentElem = document.createElement("p");
    noteContentElem.classList.add("note-content");
    noteContentElem.innerHTML = noteContent;

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => deleteNote(noteName));


    note.appendChild(noteNameElem);
    note.appendChild(noteContentElem);
    note.appendChild(deleteButton);

    noteContainer.appendChild(note);

    return note;
}


function newNote() {
    if (
        noteNameInput.value === "" ||
        noteContentInput.value === "" ||
        noteNameInput.value in noteData
    ) {
        return;
    }

    noteData[noteNameInput.value] = {
        name: noteNameInput.value, 
        content: noteContentInput.value, 
        element: displayNote(noteNameInput.value, noteContentInput.value), 
    }
    
    noteNameInput.value = "";
    noteContentInput.value = "";
}


function deleteNote(noteName) {
    if (!(noteName in noteData)) {
        return;
    }

    noteData[noteName].element.remove();
    delete noteData[noteName];
}
