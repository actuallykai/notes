var noteData = [];

var noteContainer = document.querySelector(".note-container");
var noteNameInput = document.querySelector("#note-name");
var noteContentInput = document.querySelector("#note-content");

var cssBody = document.querySelector("body");


function noteNames(data) {
    return data.map((x) => x.name);
}

function getIdFromName(noteName, data) {
    return noteNames(data).indexOf(noteName);
}


function refreshNotes(newNoteData) {
    noteContainer.textContent = "";
    for (let i = 0; i < newNoteData.length; i++) {
        noteContainer.appendChild(newNoteData[i].element);
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
        noteNames(noteData).includes(noteNameInput.value)
    ) {
        return;
    }

    noteData.push({
        name: noteNameInput.value, 
        content: noteContentInput.value, 
        element: displayNote(noteNameInput.value, noteContentInput.value), 
    });
    
    noteNameInput.value = "";
    noteContentInput.value = "";

    console.log(noteNames(noteData));
    console.log(noteData);

    cssBody.style.setProperty("--note-container-scroll", "scroll");
}


function deleteNote(noteName) {
    if (!noteNames(noteData).includes(noteName)) {
        return;
    }

    var noteIdx = getIdFromName(noteName, noteData);

    console.log(noteData[noteIdx]);

    noteData[noteIdx].element.remove();
    noteData.splice(noteIdx, 1);

    if (noteData.length < 1) {
        cssBody.style.setProperty("--note-container-scroll", "hidden");
    }
}
