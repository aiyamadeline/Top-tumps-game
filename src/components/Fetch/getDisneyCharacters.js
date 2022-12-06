import { useState, useEffect } from 'react';


const DisneyCharacters = () => {

    const [characters, setcharacters] = useState(null)
    const [loading, setloading] = useState(true);
    const [error, SetError] = useState(null);


    useEffect(() => {

    
    fetch("https://swapi.dev/api/people")
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(data => {
            setcharacters(data);
        })
        .catch(error => {
            console.error("Error frtching data: ", error);
            SetError(error)
        })
        .finally(() => {
            setloading(false);
        })
    }, [])

    if (loading) return "Loading...";
    if (error) return "Error";


     
console.log(characters)
// const charactersArr = Object.entries(characters)
//   console.log(Array.isArray(charactersArr))
//   console.log(charactersArr)

    return (
        <>
            <section>
                {characters.results.map((character, index) => {
                    return (
                        <div key={index}>
                            <p>{character.name}</p>
                            <p>{character.height}</p>
                            <p>{character.mass}</p>
                            <p>{character.hair_color}</p>
                        </div>
                    )
                })}

            </section>
        </>
    )
}

export default DisneyCharacters;