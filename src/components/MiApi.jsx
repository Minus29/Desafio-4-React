import React from 'react'
import { useEffect, useState } from 'react'
import Characters from "./Characters";



const MiApi = () => {

  const [characters, setCharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <div className='container mt-5'>
      <Characters characters={characters} />
    </div>
  )
}

export default MiApi