import { useEffect, useState } from 'react'
import './App.css'
import ICharacter from '../../models/ICharacter';

function App() {

  const [characters, setCharactes] = useState<ICharacter[]>([]);

  const BASE_URL = "http://localhost:3000";
  const CHARACTERS_URL = `${BASE_URL}/characters`;

  useEffect(() => {
    fetch(CHARACTERS_URL)
    .then((response) => response.json())
    .then((characters:ICharacter[]) => setCharactes(characters))
  }, [])

  return (
    <>
    <h1>Lord of the Rings</h1>
    <h2>Characters</h2>
    {console.log(characters)}
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name} - the {character.race} is {character.role}</li>
      ))}
    </ul>
    </>
  )
}

export default App
