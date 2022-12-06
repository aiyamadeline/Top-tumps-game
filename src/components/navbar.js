import "../styles/navbar.css"
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"
import Character from "./Fetch/getCharacter1";
import Marvelcharacter from "./Fetch/getcharacters2";
import DisneyCharacters from "./Fetch/getDisneyCharacters";


const Navbar = () => {

    const[isNavExpanded, setIsNavExpanded] = useState(false)

    const navigate = useNavigate();

    const navigateToCharacter1 = () => {
        //navigate to rick and morty cards
        navigate("/rickandmorty")
    }

    const navigateToCharacter2 = () => {
        navigate("/disney")
    }


    return (
        <nav className="navigation">
            <a href="/" className="game">
                Top Trumps
            </a>
            <button className="nav-button"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >    
                {/*icon */}
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none"
                     viewBox="0 0 24 24" 
                     stroke-width="1.5" 
                     stroke="currentColor" 
                     class="w-6 h-6">
                    
                    
                    <path stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  
            </button>
            <div 
                className={
                    isNavExpanded ? "nav-menu expanded" : "nav-menu"

                    }
                    >
                <ul>
                    <li>
                        
                        <a href="/rickandmorty" onClick={navigateToCharacter1}>rickandmorty</a>
                    </li>
                    <li>
                        <a href="/disney" onClick={navigateToCharacter2}>Disney</a>
                    </li>
                    <li>
                        <a href="/3">game3</a>
                    </li>
                </ul>

                <Routes>
                    <Route path="/rickandmorty" element={<Character/>} />
                    <Route path="/disney" element={<DisneyCharacters/>} />
                </Routes>
            </div>
        </nav>
    )
}

export default Navbar;