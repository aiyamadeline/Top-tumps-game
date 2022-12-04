import "../styles/navbar.css"
import { useState } from "react";



const Navbar = () => {

    const[isNavExpanded, setIsNavExpanded] = useState(false)



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
                        <a href="/rickandmorty">rickandmorty</a>
                    </li>
                    <li>
                        <a href="/simpsons">simpsons</a>
                    </li>
                    <li>
                        <a href="/3">game3</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;