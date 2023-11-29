const Search = ({ searchNote }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Escribe para buscar nota..."
                onChange={(e) => searchNote(e.target.value)}
            />
        </div>
    );
}

export default Search;