// imports dependencies and files
import React, { Component } from "react";
// import Navbar from "./components/Navbar";
import Jumbotron from "../Jumbotron";
// import HockeyCard from "../HockeyCard";
import { Col, Row, Container } from "../Grid";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import products from "../hockey.json";
import API from "../../utils/API";
import { Input, FormBtn } from "../Form";
import DeleteBtn from "../DeleteBtn";
import HockeyCard from "../HockeyCard";
import "./ProductList.css";


class ProductList extends Component { 
    state = {
        products, 
        clickedHockey:[],
        title: "",
        description: "",
        category: ""
    };

    componentDidMount() {
        this.loadProductList();
      }

      loadProductList = () => {
        API.getProducts()
          .then(res =>
            this.setState({ hockey: res.data, title: "", description: "", category: "" })
          )
          .catch(err => console.log(err));
      };

      deleteProduct = id => {
        API.deleteProduct(id)
          .then(res => this.loadProductList())
          .catch(err => console.log(err));
      };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.description && this.state.category) {
          API.saveProduct({
            title: this.state.title,
            description: this.state.description,
            category: this.state.category
          })
            .then(res => this.loadProductList())
            .catch(err => console.log(err));
        }
      };


      render() {
        return (
          
        <div>

          {/* <header class = "header">
            <h2>Hockey Gear & Equipment!</h2>
            <h3>Click on an individual product to select your item.</h3>
          </header> */}



          <Container fluid>
        
        <Row>
          <Col size="md-12">
            <Jumbotron>
            {/* <header class = "header"> */}
              <h2>Hockey Gear & Equipment!</h2>
              <h3>Click on an individual product to select your item.</h3>
            {/* </header>               */}
            </Jumbotron>
          </Col>
        </Row>

        </Container>


          <div className="wrapper">
              <List>
              {this.state.products.map(product => (
                  <ListItem key={product.id}>
                  <Link to={"/products/" + product.id}>
                      <HockeyCard imageOnClick={this.imageOnClick}
                      id={product.id}
                      key={product.id}
                      image={product.image}
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


















































