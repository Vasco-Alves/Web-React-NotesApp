const Note = ({ id, title, text, date, deleteNote }) => {
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="note-footer">
        <small>{date}</small>
        <button onClick={() => deleteNote(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Note;