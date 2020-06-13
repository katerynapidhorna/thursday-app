import  Navbar from 'react-bootstrap/Navbar'
import {NavLink} from 'react-router-dom'
import React from 'react'
import './Navigation.css'

export default function Navigation() {
  return  <div className='navigation'>
          <Navbar>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/discover">Discover movies</NavLink>
          </Navbar>
          </div>
}