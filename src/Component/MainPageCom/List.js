import React,{useEffect, useState} from 'react'
import '../MainPageCom/ListCs.css'

function List() {
const[open,setOpen]=useState(false)

  return (
    <div>
        <ul type="none">
        <li class="one">Home</li>
        <li>Movies</li>
        <li>Tv Series</li>
        <li>Subbed</li>
        <li>Dubbed</li>
        <li>DC</li>
        <li>Marvel</li>
        <li>ONA</li>
        <li>Event</li>
        </ul>
        <div id="catagorie">
        <a class="c1">Action</a>
        <a class="c2">Shonen</a>
        <a class="c3">Romance</a>
        <a class="c4">Drama</a>
        <a class="c5">R-Rated</a>
        <a class="c6">Demeon</a>
        <a class="c7">Comedy</a>
        <a class="c8">Horrer</a>
            

        </div>
        
    </div>
  )
}

export default List