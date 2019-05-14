import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";

class ProductDetail extends Component {
  state = {
    product: {
        'title': 'Sample Product',
        'description': 'My Product description'
    }
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
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
              <h1>
                {this.state.product.title}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>
                {this.state.product.description}
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
