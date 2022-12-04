
import './styles/App.css';
import Character from './components/getCharacter';
import Marvelcharacter from './rickandmorty/getcharacters';
import Card from './components/createCard';
import './styles/Card.css';
import Navbar from './components/navbar';

 


function App() {
  return (
    <>
      <header>
        
        <Navbar/>
  
      </header>
      <main>
        <div className='card'>
        <Card/>
      
      </div>
      </main>
      <footer>

      </footer>
    
    </>
  );
}

export default App;
