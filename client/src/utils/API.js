import axios from "axios";

export default {
  // Gets all hockey images
  getProducts: function() {
    return axios.get("/api/hockey");
  },
  // Gets the hockey images with the given id
  getProduct: function(id) {
    return axios.get("/api/hockey/" + id);
  }
};
