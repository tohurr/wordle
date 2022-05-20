import React, {useEffect} from 'react';
import Key from './Key';

//creating 3 lines since there are 3 rows on the keyboard
function Keyboard() {
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const handleKeyboard = useCallBack((event) => {
    
  })

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);

    return () => {
      document.removeEventListener('keydown', handleKeyboard );
    };
    }, [handleKeyboard]);


  
  return (
  <div className = 'keyboard' onKeyDown = {handleKeyboard}>
          
          <div className = 'line1'> {keys1.map((key) => {return <Key keyVal={key}/>; } ) } </div>
          
          <div className = 'line2'> {keys2.map((key) => {return <Key keyVal={key}/>; } ) } </div>
          
          <div className = 'line3'>
          
          <Key keyVal={'ENTER'} bigKey/> 
          
          {keys3.map((key) => {return <Key keyVal={key}/>;} ) }
          
          <Key keyVal={'DELETE'} bigKey/> 
          
          </div>
      
      </div>
  );

}

export default Keyboard;