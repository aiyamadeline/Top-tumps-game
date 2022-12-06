import Navbar from "./navbar"
import RickCharacter from "./Fetch/getCharacter1"
import Card from "./createCard"

const Homepage = () => {

    return (
        <div>
        <header> 
            <Navbar/>
        </header>
        <main>
            <div className="Title">
        Choose your Game
            </div>
        </main>
        <footer>

        </footer>
        </div>
    )

}

export default Homepage;