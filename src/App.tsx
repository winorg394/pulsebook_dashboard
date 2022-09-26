import React, { Component, useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './Route/ProtectedRoute';
import Home from './pges/home/home';
import Login from './pges/Auth/Login';
import Layout from './components/Layout/Layout';
import Auth from './components/Layout/Auth';
import Register from './pges/Auth/Register';
import Auteur from './pges/Auteur/Auteur';
import { useSelector, useDispatch } from 'react-redux';
import ApiService from './services/ApiService';
import { INIT_ACTION, LOGIN_ACTION } from './store/authReducers';
import Navigation from './components/navigation/Navigation';
import Utilisateur from './pges/Utilisateur/Utilisateur';
import Category from './pges/Category/Category';
import Become from './pges/Auteur/Become';

function App() {

  const [userData, setUser] = useState();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("user auth");



  const dispatch = useDispatch()

  const Api = new ApiService();

  const auth = useSelector((state: any) => state.auth)

  const getUser = async (data: any) => {
    const user = JSON.parse(data);
    console.log("user data list");

    console.log(user);
    setUser(user);

    dispatch(LOGIN_ACTION(user))


  }

  const init = () => {
    const userdata = localStorage.getItem("isAuthenticated");

    if (userdata) {
      getUser(userdata)
    }

    dispatch(INIT_ACTION())
  }

  React.useEffect(() => {
    init()
    console.log("init");

    console.log(auth.init);

  }, [])
  return (

    /* <BrowserRouter>
    <Routes>
      {!isAuthenticated ?

        <Route path="/" element={<Layout />}>a
          <Route index element={<Home />} />
          <Route path="/auteur/list" element={<Auteur />} />
        </Route>
        :
        <Route path="/" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>}
    </Routes>
  </BrowserRouter> */

    /*     <HashRouter>
        <div className="App">
     
            { (auth.init) ? <Navigator /> : <></> }
        </div>
      </HashRouter> */

    <BrowserRouter>
      <Routes>
{/*         {userData ? <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auteur/list" element={<Auteur />} />
          <Route path="/utilisateur/list" element={<Utilisateur />} />
          <Route path="/category/list" element={<Category />} />
          <Route path="/author/become" element={<Become />} />
        </Route> : <Route path="/" element={<Auth />}>
          <Route path="/login" element={<Login />} />
        </Route>} */}
        
         <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auteur/list" element={<Auteur />} />
          <Route path="/utilisateur/list" element={<Utilisateur />} />
          <Route path="/category/list" element={<Category />} />
          <Route path="/author/become" element={<Become />} />
        </Route> 
         <Route path="/" element={<Auth />}>
          <Route path="/login" element={<Login />} />
        </Route>

      </Routes>
    </BrowserRouter>



  );
}

export default App;
