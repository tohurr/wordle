import React, { useContext } from 'react';
import {AppContext} from '../App.js';

function Key({ keyVal, bigKey }) {
    const {board, setBoard} = useContext(AppContext);

    const selectLetter = () => {
        const currBoard = [...board]
        currBoard[0][0] = keyVal;
        setBoard(currBoard)
    }

  return (
  <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
  
  {keyVal}</div>
  );
}

export default Key