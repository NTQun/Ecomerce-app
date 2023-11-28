import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async (data) => {
  const response = await axios.get(
    `${base_url}product?${data?.brand ? `brand=${data?.brand}&&` : ""}${
      data?.tag ? `tags=${data?.tag}&&` : ""
    }${data?.category ? `category=${data?.category}&&` : ""}${
      data?.getcate ? `category=${data?.getcate}&&` : ""
    }${data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""}${
      data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""
    }${data?.sort ? `sort=${data?.sort}&&` : ""}`
  );
  if (response.data) {
    return response.data;
  }
};
const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) {
    return response.data;
  }
};
const addToWishlist = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { prodId },
    config
  );
  if (response.data) {
    return response.data;
  }
};

const rateProduct = async (data) => {
  const responce = await axios.put(`${base_url}product/rating`, data, config);
  if (responce.data) {
    return responce.data;
  }
};

const updateQuantityOrder = async (data) => {
  const responce = await axios.post(
    `${base_url}product/update-quantity-order/${data.id}`,
    { quantity: data.quantity }
  );
  if (responce.data) {
    return responce.data;
  }
};

const updateQuantityCancel = async (data) => {
  const responce = await axios.post(
    `${base_url}product/update-quantity-cancel/${data.id}`,
    { quantity: data.quantity }
  );
  if (responce.data) {
    return responce.data;
  }
};
const updateRate = async (data) => {
  console.log(data);
  const responce = await axios.put(
    `${base_url}product/update-rating/${data.id}`,
    {
      index: data.index,
      comment: data.comment,
      star: data.star,
    }
  );
  if (responce.data) {
    return responce.data;
  }
};
const deleteRate = async (data) => {
  const responce = await axios.put(
    `${base_url}product/delete-rating/${data.id}`,
    {
      index: data.index,
    }
  );
  if (responce.data) {
    return responce.data;
  }
};
export const productService = {
  getProducts,
  addToWishlist,
  getSingleProduct,
  rateProduct,
  updateQuantityOrder,
  updateQuantityCancel,
  updateRate,
  deleteRate,
};
