import React from 'react'

const categories = () => {
  return (
    <div className="d-flex justify-content-between p-5 align-items-center">
      <h2>Categories</h2>
      <div>
        <button type="button" className="btn btn-outline-primary mx-3"><i className="bi bi-plus"></i> Create New</button>
        <button type="button" className="btn btn-outline-primary"><i className="bi bi-funnel"></i>Filter</button>
      </div>
    </div>
  )
}

export default categories