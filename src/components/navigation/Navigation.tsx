import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";



import {
  useSelector
} from 'react-redux'
import Home from '../../pges/home/home';
import Login from '../../pges/Auth/Login';
import Register from '../../pges/Auth/Register';
import Layout from '../Layout/Layout';
import Auteur from '../../pges/Auteur/Auteur';

function Navigation() {

  const auth = useSelector((state: any) => state.auth)

  return (
  
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/auteur/list" element={<Auteur />} />
      </Route>
  
  )
}

export default Navigation;
