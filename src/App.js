import './App.css';
import React, { useRef, useEffect } from 'react';

function App() {

  const inputRef = useRef();

  // useEffect(() => {
  //   const button = document.createElement("button");
  //   button.addEventListener('click', () => inputRef.current.focus());
  //   button.click();
  // }, [])

  return (
    <div className="App">
      <form>
        <input ref={inputRef} ></input>
      </form>
      <button onClick={() => inputRef.current.focus()}>нажми меня</button>
    </div>
  );
}

export default App;
