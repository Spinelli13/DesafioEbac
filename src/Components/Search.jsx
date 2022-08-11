import React from 'react'
import {BiSearchAlt2} from "react-icons/bi";

import './Search.css'

const Search = () => {
  return (
    <div>
        <nav id="navbar">
        <form action="">
                <input type="text" placeholder="Procure aqui..."/>
                <button type="submit">
                    <BiSearchAlt2/>
                </button>
            </form>
            </nav>
    </div>
  )
}

export default Search