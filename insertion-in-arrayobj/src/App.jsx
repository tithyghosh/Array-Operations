import { useState } from "react";

const App = () => {
  let nextId = 3;
  const initialArtists = [
    {
      id: 0,
      name: 'Marta Colvin Andrade'
    },
    {
      id: 1,
      name: 'Lamidi Olonade Fakeye'
    },
    {
      id: 2,
      name: 'Louise Nevelson'
    },
  ];
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtists);
  const handleClick = () => {
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      {
        id: nextId++,
        name: name
      },
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('')
  }
  return (
    <>
      <h1>Inspiring Sculptors: </h1>
      <input value={name} 
      onChange={e => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
