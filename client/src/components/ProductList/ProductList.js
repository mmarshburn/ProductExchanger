// imports dependencies and files
import React, { Component } from "react";
// import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
// import HockeyCard from "../HockeyCard";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import hockey from "../hockey.json";
import API from "../../utils/API";
import { Input, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";

class ProductList extends Component { 
    state = {
        hockey, 
        clickedHockey:[],
        title: "",
        description: "",
        category: ""
    };

    componentDidMount() {
        this.loadProductList();
      }

      loadProductList = () => {
        API.getHockey()
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
            author: this.state.description,
            synopsis: this.state.category
          })
            .then(res => this.loadProductList())
            .catch(err => console.log(err));
        }
      };


      render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h1>Item Description</h1>
                </Jumbotron>

                <form>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                  />

                  <Input
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder="Description (required)"
                  />

                    <Input
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="category"
                    placeholder="Category (required)"
                  />

                  <FormBtn
                    disabled={!(this.state.title && this.state.description && this.state.category)}
                    onClick={this.handleFormSubmit}
                  >

                    Submit Product
                  </FormBtn>
                </form>
              </Col>

              <Col size="md-6 sm-12">
                <Jumbotron>
                  <h1>Product List</h1>
                </Jumbotron>
                {this.state.product.length ? (
                  <List>
                    {this.state.product.map(product => (
                      <ListItem key={product._id}>
                        <Link to={"/product/" + product._id}>
                          <strong>
                            {product.title} by {product.description}
                          </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteProduct(product._id)} />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
          </Container>
        );
      }
    }



//     // When hockey product photo is clicked
//     hockeyOnClick = event => {
//         const currentHockey = event.target.alt;
//         const hockeyClicked = this.state.clickedHockey.indexOf(currentHockey);

//         // Hockey product opens to a new window where you can purchase the product
//         if (hockeyClicked) {
//             this.setState({
//                 hockey: this.state.hockey(function(a, b) {
//                     return 
//                 })
//             })
//         }




//     }


//     render() {
//         return (
//             <div>
//                 <div className="wrapper">
//                     <List>
//                     {this.state.hockey.map(hockey => (
//                         <ListItem key={hockey.id}>
//                         <Link to={"/products/" + hockey.id}>
//                             <HockeyCard imageOnClick={this.imageOnClick}
//                             id={hockey.id}
//                             key={hockey.id}
//                             image={hockey.image}
//                             />
//                             </Link>
//                             </ListItem>
//                     ))}
//                     </List>
//                 </div>
//             </div>
//         );
//     }
// }

export default ProductList;


















































