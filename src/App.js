// imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import HockeyCard from "./components/HockeyCard";
// import Footer from "./components/Footer";
import hockey from "./hockey.json";

class App extends Component { 
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
                <Navbar />

                <Jumbotron />
                <div className="wrapper">
                    {this.state.hockey.map(hockey => (
                        <HockeyCard imageOnClick={this.imageOnClick}
                        id={hockey.id}
                        key={hockey.id}
                        image={hockey.image}
                        />
                    ))}
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default App;


















































