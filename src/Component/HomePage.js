import React from 'react'
import '../Styles/HomePageCs.css'
import zoro from '../Logo/logo.png'
import pic from '../Logo/body.png'
import search from '../Logo/search.png'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
    <div id="body">
        <img src={zoro} id="logo" alt="logo"/>
        <img src={pic} id="pic" alt="body"/>
        <img src={search} id="HomeSrc" alt="search"/>
        <div class="navbar">
              <a><Link to="/MainPage">Home</Link></a>           
              <a>Movies</a>
              <a>TV Series</a>
              <a>Most Popular</a>
              <a>Top Airing</a>
        </div>
        <div>
            <h3>ZORO.to</h3>
            <input type="text" placeholder='Search anime..'/>
            <div class="suggest">Top search :
                <a class="videos">Demon Slayer:Kimetsu no Yaiba Swordsmith Village Arc</a>
                <a class="videos">One Piece</a>
                <a class="videos">Black Clover</a>
                <a class="videos">Vinland Saga:2nd Season</a>
                <a class="videos">Naruto: Shippuden</a>
                <a class="videos">Demon Slayer:Kimetsu no Yaiba</a>
                <a class="videos">Black Clover:Sword of the Wizard King</a>
                <a class="videos">Hell's Paradise</a>
                <a class="videos">Naruto</a>
                
            </div>
        </div>
        <Link to="/MainPage"><button type="submit" id="btn">View full site</button></Link>

    </div>
    </>
  )
}

export default HomePage