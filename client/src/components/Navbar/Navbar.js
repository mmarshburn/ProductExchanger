//The Navbar component info
import React, { Component } from "react";
import "./Navbar.css";


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li class="left">FEATURED PRODUCTS | </li>
                    <li class="right">Check Your Hockey Products</li>

                    <input class="control" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" type="search" placeholder="Search for hockey gear">
                    </input>

                    <button class="ui button" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </ul>

                
            </nav>

            
        );
    }
}



export default Navbar;