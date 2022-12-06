import { useState, useEffect } from 'react';


const Marvelcharacter = () => {

    const [characters, setcharacters] = useState(null)
    const [loading, setloading] = useState(true);
    const [error, SetError] = useState(null);


    useEffect(() => {

    
    fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=9d5151e8afe6c079360e4cd9486bf826")
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

    const charactersArr = Object.entries(characters)
    console.log(charactersArr)



    return (
        <>
            <div>
                {charactersArr.map((character, index) => {
                    return (
                        <div key={index}>
                            <p>{character.name}</p>
                            <p>{character.description}</p>
                            <p>{character.thumbnail.path}</p>
                        </div>
                    )
                    

                }
                )}
                
           </div>
    
        </>
    )
            }       
            

    export default Marvelcharacter;
