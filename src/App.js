import './css/App.css';
import WBoard from './components/WBoard';
import Keyboard from './components/Keyboard';
import { createContext, useState} from 'react';
import { boardDefault } from './Words';

export const AppContext = createContext();

function App() {
  const [board, setWBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      
      <AppContext.Provider value= {{board, setWBoard}}>
      <WBoard />
      <Keyboard />
      </AppContext.Provider>
      
    </div>
  );
}

export default App;

