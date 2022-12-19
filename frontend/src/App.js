import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Login from "./components/auth/Login"
import { Quora } from './components/Quora';
//import { Login } from '@mui/icons-material';
import { selectUser } from './feature/userSlice';



const App = () => {
  // const user = useSelector((store) => store)
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {
        user ? (<Quora />) : (<Login />)
        //<Quora />
      }

    </div>
  );
}

export default App;
