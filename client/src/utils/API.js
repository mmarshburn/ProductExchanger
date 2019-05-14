import axios from "axios";

export default {
  // Gets all books
  getProducts: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getProduct: function(id) {
    return axios.get("/api/books/" + id);
  },
};
