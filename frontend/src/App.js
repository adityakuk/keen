import React from 'react';
// import Login from './components/auth/Login';
import { Quora } from './components/Quora';
import './App.css';
// import { useSelector } from 'react-redux';


const App = () => {
  // const user = useSelector((store)=>store)
  return (
    <div className="App">
      <Quora />
    </div>
  );
}

export default App;
