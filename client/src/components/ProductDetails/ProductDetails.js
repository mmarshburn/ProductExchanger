import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import "./ProductDetails.css";

class ProductDetail extends Component {
  state = {
    product: {
        "title": "Sample Product",
        "description": "My Product description",
        "category": "Hockey Category"
    }
  };
  
  // When this component mounts, grab the hockey product with the _id of this.props.match.params.id

  componentDidMount() {
    API.getProduct(this.props.match.params.id)
      .then(res => this.setState({ product: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>PRODUCT PAGE</h1>              
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h4>Title</h4>
              <p>
                {this.state.product.title}
              </p>
            </article>
          </Col>
        </Row>
        
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h4>Description</h4>
              <p>
                {this.state.product.description}
              </p>
            </article>
          </Col>
        </Row>

        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h4>Category</h4>
              <p>
                {this.state.product.category}
              </p>
            </article>
          </Col>
        </Row>

        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Product List</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductDetail;