import React from 'react'

const GifSearch = ({ handleSubmit, handleChange, searchTerm}) => {
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <input type="submit" />
    </form>
  )
}

export default GifSearch
