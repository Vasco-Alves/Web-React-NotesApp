import Note from "./Note";

const NoteList = ({ notes, deleteNote }) => {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <Note
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    date={note.date}
                    deleteNote={deleteNote}
                />
            ))}
        </div>
    );
}

export default NoteList;