import React from 'react'

const GifList = ({ gifData }) => {

  const gifs = gifData.map(gif => {
    return (
      <img src={gif.images.original.url} alt={gif.images.original.url} key={gif.images.original.url} />
    )
  })

  return (
    <div className='gif-list'>
      {gifs}
    </div>
  )
}

export default GifList
