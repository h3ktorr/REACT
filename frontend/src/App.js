import { useState } from 'react';
import './App.css'

const phrases = [
  'No',
  'Are you sure?',
  'Really sure?',
  'Ochie babyy',
  'its your baby o',
  'Dont do this',  
  'you want to break my heart :('
]

function App() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressd] = useState(false)
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick(){
    setNoCount(noCount + 1)
  }

  function getNoButtonText(){
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <div className="valentine-container">
      {yesPressed? (
        <>
          <img 
            alt='bears hugging'
            src='https://gifdb.com/images/high/strong-cute-love-hug-ukptk2pjqsd2af7g.gif'
          />
          <div className='text'>I know you cant resist me :)</div>
        </>
      ):(
        <>
          <img 
            alt='bear with heart'
              src='https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif'
          />

          <div className='question'>Will you be my Val?</div>
          <div>
            <button
              className='yesButton'
              style={{fontSize: yesButtonSize}}
              onClick={()=>setYesPressd(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className='noButton'>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
