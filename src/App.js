
import './styles/App.css';
import RickCharacter from './components/Fetch/getCharacter1';
import Marvelcharacter from './components/Fetch/getcharacters2';
import Card from './components/createCard';
import './styles/Card.css';
import Navbar from './components/navbar';
import Homepage from './components/homePage';

 


function App() {
  return (
    <>
      <header>
    <Navbar/>
      </header>
      <main>
        {/* <div className='card'>
        <Card/> */}
      <Homepage/>
      
      </main>
      <footer>

      </footer>
    
    </>
  );
}

export default App;
