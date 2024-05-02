let noteData = {}

function newNote() {
    var noteTitleInput = document.getElementById("title");
    var noteTextInput = document.getElementById("note");

    if (noteTitleInput.value === "" || noteTextInput.value === "" || noteTitleInput.value in noteData) {
        return;
    }

    var noteContainer = document.createElement("div");
    noteContainer.classList.add("note");

    var noteTitle = document.createElement("h2");
    noteTitle.appendChild(document.createTextNode(noteTitleInput.value))

    var noteText = document.createElement("p");
    noteText.appendChild(document.createTextNode(noteTextInput.value))

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.appendChild(document.createTextNode("Delete"));

    deleteButton.addEventListener("click", deleteNote.bind(deleteButton, noteTitleInput.value));


    noteContainer.appendChild(noteTitle);
    noteContainer.appendChild(noteText);
    noteContainer.appendChild(deleteButton);

    document.querySelector(".notes-container").appendChild(noteContainer);

    noteData[noteTitleInput.value] = [noteTextInput.value, noteContainer];

    noteTitleInput.value = "";
    noteTextInput.value = "";
}


function deleteNote(noteTitle) {
    console.log(noteTitle);
    if (!(noteTitle in noteData)) {
        return;
    }

    noteData[noteTitle][1].remove();
    delete noteData[noteTitle];
}
