import React from 'react'
import ReactDom from 'react-dom'
import List from '../MainPageCom/List'
import '../MainPageCom/MenuCs.css'

function Menu({open,close}) {
    if(!open) return null

  return ReactDom.createPortal(
        
    <>
    <div id="MenuBody">
    <div id="button">
    <button type="button" id='btn01' onClick={close}>Close menu</button>
    <button type="button" id='btn02'>Donate</button>
    <button type="button" id='btn03'>Community</button> 
    </div>
    <div id="list">
        <List/>
    </div>
    </div>
    </>,
    document.getElementById("portal")

  )
  
}

export default React.memo(Menu)