import React, { useState } from 'react'

const App = () => {
  let initialArtists = [
    {
      id: 0,
      name: 'Maimunah Tabassum',
    },
    {
      id: 1,
      name: 'Shrabony Ghosh Tithy',
    },
    {
      id: 2,
      name: 'Sabikun Nahar Mina',
    },
    {
      id: 3,
      name: 'Nusrat Jahan Sharmin',
    }
  ];
  const [artists, setArtists] = useState(initialArtists);
  return (
    <>
      <h1>Inspiring sculptors: </h1>
      <ul>{artists.map(
        artist => (
          <li key={artist.id}>{artist.name}{' '}
          <button onClick={() =>{
            setArtists(artists.filter(a => a.id !== artist.id))
          }}>delete</button>
          </li>
        )
      )}</ul>
    </>
  )
}

export default App
