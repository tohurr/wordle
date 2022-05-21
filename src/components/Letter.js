import React, {useContext} from 'react';
import {AppContext} from '../App.js';

function Letter({letterPos, attemptVal}) {
    const {board, correctWord, currAttempt} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const correct = correctWord[letterPos] === letter;

    const some = !correct && letter !== '' && correctWord.includes(letter);

    const letterState = currAttempt.attempt > attemptVal && 
    (correct ? 'correct' : some ? 'some' : 'error');

  return (
  <div className = 'letter' id = {letterState}> {''} {letter} </div>
  );
}

export default Letter