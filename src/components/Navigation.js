import  Navbar from 'react-bootstrap/Navbar'
import {NavLink} from 'react-router-dom'
import React from 'react'

export default function Nuvigation() {
  return  <Navbar>
            <NavLink to="/discover">Discover movies</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink exact to="/">Home</NavLink>
          </Navbar>
}