import { useState, useEffect } from "react";
import NoteEditor from "./components/NoteEditor";
import NoteList from "./components/NoteList";
import Search from "./components/Search";

const App = () => {
  const [notesList, setNotes] = useState([
    {
      id: Date.now(),
      title: "Ejemplo",
      text: "Esta es una nota ejemplo.",
      date: new Date().toDateString()
    }
  ]);

  const [searchText, setSearchText] = useState("");

  // Lee notas guardadas localmente
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('react-notes-data'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  // Guarda notas localmente
  useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notesList));
  }, [notesList]);

  // Adiciona nueva nota al final de la lista
  const addNote = (newNote) => { setNotes([...notesList, newNote]); }

  // Remueve la nota con 'id' de la lista
  const deleteNote = (id) => {
    const updatedNotes = notesList.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  return (
    <>
      <div className="container">
        <h1>Aplicación de Notas</h1>
        <Search searchNote={setSearchText} />
        <NoteEditor addNote={addNote} />
        <NoteList
          notes={notesList.filter((note) =>
            note.text.toLowerCase().includes(searchText) ||
            note.title.toLowerCase().includes(searchText))}
          deleteNote={deleteNote} />
      </div>
      <footer>Vasco de Melo - 3 INSO A</footer>
    </>
  );
}

export default App;