import React, { useContext } from 'react';
import {AppContext} from '../App.js';

function Key({ keyVal, bigKey }) {
    const {board, setBoard, currAttempt} = useContext(AppContext);

    const selectLetter = () => {
        const currBoard = [...board]
        currBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setBoard(currBoard);
        
    }

  return (
  <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
  
  {keyVal}</div>
  );
}

export default Key