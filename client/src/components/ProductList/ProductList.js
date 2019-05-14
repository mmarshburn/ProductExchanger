// imports dependencies and files
import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// import Jumbotron from "./components/Jumbotron";
import HockeyCard from "../HockeyCard";
// import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import hockey from "../hockey.json";

class ProductList extends Component { 
    state = {
        hockey, 
        clickedHockey:[]
    };

    // When hockey product photo is clicked
    hockeyOnClick = event => {
        const currentHockey = event.target.alt;
        const hockeyClicked = this.state.clickedHockey.indexOf(currentHockey);

        // Hockey product opens to a new window where you can purchase the product
        if (hockeyClicked) {
            this.setState({
                hockey: this.state.hockey(function(a, b) {
                    return 
                })
            })
        }




    }


    render() {
        return (
            <div>
                <div className="wrapper">
                    <List>
                    {this.state.hockey.map(hockey => (
                        <ListItem key={hockey.id}>
                        <Link to={"/products/" + hockey.id}>
                            <HockeyCard imageOnClick={this.imageOnClick}
                            id={hockey.id}
                            key={hockey.id}
                            image={hockey.image}
                            />
                            </Link>
                            </ListItem>
                    ))}
                    </List>
                </div>
            </div>
        );
    }
}

export default ProductList;


















































