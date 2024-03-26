



function AdminLayout(){
  return(
    <div className="top-search-bar">
      <form>
        <input
          type="text"
          //value={query}
          //onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default AdminLayout