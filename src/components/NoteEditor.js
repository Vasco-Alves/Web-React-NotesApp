import { useState } from "react";

const NoteEditor = ({ addNote }) => {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    // Crea nueva nota
    const handleAddNote = () => {
        if (text) {
            const newNote = {
                id: Date.now(),
                title,
                text,
                date: new Date().toDateString()
            }

            addNote(newNote); // Envía nota a App.addnote()

        } else
            alert("Nota debe contener al menos un texto.")

        // Resetea los parámetros
        setTitle("");
        setText("");
    }

    return (
        <div className="note new">
            <div className="note-footer">
                <input
                    type="text"
                    placeholder="Titulo..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={handleAddNote}>Adicionar nota</button>
            </div>
            <textarea
                placeholder="Escribe una nota..."
                rows="5"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}

export default NoteEditor;