import React from 'react'
import styles from './style/Header.module.css'
import Breadcrumb from '../Pages/Breadcrumb'

/* react-router */
import {
    NavLink, Outlet,
} from 'react-router-dom'



export default function RootLayout() {

  return (
    <div>
        <header>
            <nav>
                <h1>React Router</h1>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to='help'>Help</NavLink>
                <NavLink to='careers'>Careers</NavLink>
            </nav>
            <Breadcrumb />
        </header>

        <main>
            <Outlet />
        </main>
    </div>
    
 
  )
}
