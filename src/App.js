import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import '@antscorp/document/main.css';

function App() {

  const [TopolPlugin, setTopolPlugin] = useState()

  useEffect(() => {
    var s = document.createElement('script');

    s.src = "https://d5aoblv5p04cg.cloudfront.net/editor-2/loader/build.js"
    s.type = "text/javascript";
    
    document.body.appendChild(s)

    setTopolPlugin(window.TopolPlugin)

  } , [])

  console.log(TopolPlugin)

  return (
    <>
    <button onClick={() => {console.log(window.TopolPlugin)}}>onCLick</button>
    qw
    </>
    );
}

export default App;
