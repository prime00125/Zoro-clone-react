import React from 'react'
import Header from '../Component/Header'
import  r from'../Logo/r.jpg';
import '../Styles/MainPageCs.css'
function MainPage() {
  return (
    <>
    <Header/>
  
    <img src={r} id="backGroundImg" alt="r"/>  
    
    </> 
  )
}

export default MainPage