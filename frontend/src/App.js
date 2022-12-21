import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from "./components/auth/Login"
import { Quora } from './components/Quora';
//import { Login } from '@mui/icons-material';
import { login, selectUser } from './feature/userSlice';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  // const user = useSelector((store) => store)
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(login({
          userName: authUser.displayName,
          photo: authUser.photoURL,
          email: authUser.email,
          uid: authUser.uid,
        }))
        console.log("AuthUser", authUser)
      }
    })
  }, [dispatch]);
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
