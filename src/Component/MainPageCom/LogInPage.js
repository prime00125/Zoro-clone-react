import React from 'react'
import ReactDom from 'react-dom'
import '../MainPageCom/LoginPageCs.css'

function LogInPage({open,close}) {
    if(!open) return null
  return ReactDom.createPortal(
    <div id="LoginPageBody">
        <h3 id="heading">Welcome back !</h3>
        <form>
            <div id="backGround1"></div>
            <div id="backGround2"></div>
            <label class="LOGLABEL">USERNAME
                <input class="LOGINPUT"type="text" placeholder='name@gmail.com'/>
            </label>
            <label class="LOGLABEL">PASSWORD
                <input class="LOGINPUT"type="password" placeholder='Password'/>
            </label>
            <a id="right"> Forget Password ?</a>
            <button type="submit" id="LoginBtn">Login</button>
            <p class="a">Dont Have an account ?</p>
            <a class="logLink">Register</a><a class="logLink">Verify</a>
        </form>
        <button onClick={close} id="ExitBtn">X</button>
    </div>,
    document.getElementById('LoginPortal')
  )
}

export default React.memo(LogInPage)