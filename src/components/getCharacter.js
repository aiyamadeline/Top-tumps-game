import { useState, useEffect } from 'react';


const Character = () => {

    const [characters, setcharacters] = useState(null)
    const [loading, setloading] = useState(true);
    const [error, SetError] = useState(null);


    useEffect(() => {

    
    fetch("https://rickandmortyapi.com/api/character")
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

    
    
    //typeof characters === 'object'

//    if (
//     typeof characters === 'object' &&
//     characters !== null &&
//     !Array.isArray(characters)
//   ) {

//     console.log('Value is an object');

//   }

  const charactersArr = Object.entries(characters)
  console.log(Array.isArray(charactersArr))
  console.log(charactersArr)

  

    return (
        <>
            <div>
                {charactersArr[1][1].map((character, index) => {
                    return (
                        
                        <div key={index}>
                            <div className='cardcontent'>
                            <img src={character.image} alt={character.name} className='img'></img>
                            <div className='character-description'>
                            <dl>
                            <dt>{character.id}</dt>
                            <dt>{character.name}</dt>
                            <dt>{character.status}</dt>
                            <dt>{character.species}</dt>
                            <dt>{character.location.name}</dt>
                            <dt>{character.origin.name}</dt>
                            <dt>{character.gender}</dt>
                            </dl>
                            </div>
                            </div>
                            
                            
                            
                            
                            
                            </div>
                    )
                }
                )}
                
            </div> 
        </>
    )


}

export default Character;