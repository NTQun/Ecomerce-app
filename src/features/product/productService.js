import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);
  if (response.data) {
    return response.data;
  }
};

const addToWishlist = async (prodId) => {
  const responce = await axios.put(
    `${base_url}product/wishlist`,
    { prodId },
    config
  );
  if (responce.data) {
    return responce.data;
  }
};

const productService = {
  getProducts,
  addToWishlist,
};

export default productService;
