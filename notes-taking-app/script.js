const addBtn = document.querySelector("#addBtn");
const main = document.querySelector('#main');

addBtn.addEventListener(
    "click",
    function () {
        addNote();
    }
);

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="toolBar">
        <i class="fa-solid fa-floppy-disk"></i>
        <i class="fa-solid fa-trash"></i>
    </div>
    <textarea>${text}</textarea>
    `;
    note.querySelector(".fa-trash").addEventListener(
        "click",
        function () {
            note.remove();
            saveNotes();
        }
    );
    note.querySelector(".fa-floppy-disk").addEventListener(
        "click",
        function () {
            saveNotes();
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function () {
            saveNotes();
        }
    )
    main.appendChild(note);
    saveNotes();
}

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach((note) => {
        data.push(note.value);
    })
    if (data.length === 0) {
        localStorage.removeItem("notes");
    }
    else {
        localStorage.setItem("notes", JSON.stringify(data));
    }
}

(
    function () {
        const localNotes = JSON.parse(localStorage.getItem("notes"));
        if (localNotes === null) {
            addNote();
        }
        else {
            localNotes.forEach(
                (localNote) => {
                    addNote(localNote);
                }
            )
        }
    }
)()