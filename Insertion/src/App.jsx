import React, { useState } from 'react'

const App = () => {
  let nextId = 0;
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  return (
    <>
     <h1>Inspiring Sculptors: </h1> 
     <input value={name} 
     onChange={e => setName(e.target.value)}
     />
     <button style={{backgroundColor: 'red', padding: 10}} onClick={() =>{
      setArtists(
        [
          ...artists,
          {
            id: nextId++,
            name: name,
          }
        ]
      )
     }}>Add</button>
     <ul>
      {artists.map(artists =>(
        <li key={artists.id}>{artists.name}</li>
      ))}
     </ul>
    </>
  )
}

export default App
