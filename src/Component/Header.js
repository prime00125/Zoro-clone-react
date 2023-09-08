import React, { useEffect, useState } from 'react'
import logo from '../Logo/logo.png'
import '../Component/MainPageCom/HeaderCS.css'
import menu from '../Logo/menu.jpg'
import search from '../Logo/search.png'
import Menu from './MainPageCom/Menu'
import {Link} from 'react-router-dom'
import LogInPage from './MainPageCom/LogInPage'


function Header() {
  const[isOpen,setisOpen]=useState(false)
  const[logInOpen,setlogInOpen]=useState(false)
  return (
    <div>
    <div id="header">
     <img src={menu} class="menu" alt="menu" onClick={()=> setisOpen(true)}/>
     <Link to="/App"><img src={logo} class="logo" alt="logo"/></Link>
      <Menu open={isOpen} close={() => setisOpen(false)}/> 
     <a id="name"><strong><Link to="/App">ZORO.to</Link></strong></a>   
      <input type="text" class="search" placeholder='Search anime...'/>
      <img src={search} class="searchLogo" alt="search"/>
      <button type="button" id="btn1">Fliter</button>
      <button type="button" id="btn2" onClick={()=> setlogInOpen(true)}>Login</button>
        <LogInPage open={logInOpen} close={()=> setlogInOpen(false)}/>
      </div>
    </div>
  )
}

export default React.memo(Header)