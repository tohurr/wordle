import React, {useState} from 'react';
import { boardDefault } from './components/Words';

function wBoard() {
    const [board, setwBoard] = useState(boardDefault);
  return (
    <div>wBoard</div>
  )
}

export default wBoard