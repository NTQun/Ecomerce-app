import axios from "axios";
import { config, base_url } from "../../utils/axiosConfig";

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    return response.data;
  }
};
const login = async (user) => {
  const response = await axios.post(`${base_url}user/login`, user);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
    return response.data;
  }
};
const getUserWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  if (response.data) {
    return response.data;
  }
};
const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart`, cartData, config);
  if (response.data) {
    return response.data;
  }
};
const getCart = async (data) => {
  const response = await axios.get(`${base_url}user/cart`, data);
  if (response.data) {
    return response.data;
  }
};
const removeProductFromCart = async (data) => {
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${data.id}`,
    data.config2
  );
  if (response.data) {
    return response.data;
  }
};
const updateProductFromCart = async (cartDetail) => {
  const response = await axios.delete(
    `${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const createOrder = async (orderDetail) => {
  const response = await axios.post(
    `${base_url}user/cart/create-order`,
    orderDetail,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const getUserOrders = async () => {
  const response = await axios.get(`${base_url}user/getmyorders`, config);
  if (response.data) {
    return response.data;
  }
};

const updateUser = async (data) => {
  const response = await axios.put(
    `${base_url}user/edit-user`,
    data.data,
    data.config2
  );
  if (response.data) {
    return response.data;
  }
};
const forgotPassToken = async (data) => {
  const response = await axios.post(
    `${base_url}user/forgot-password-token`,
    data
  );
  if (response.data) {
    return response.data;
  }
};

const resetPass = async (data) => {
  const response = await axios.put(
    `${base_url}user/reset-password/${data.token}`,
    { password: data?.password }
  );
  if (response.data) {
    return response.data;
  }
};

const emptyCart = async () => {
  const response = await axios.delete(`${base_url}user/empty/`, config);
  if (response.data) {
    return response.data;
  }
};

const updateOrder = async (data) => {
  const responce = await axios.put(
    `${base_url}user/cancel/${data.id}`,
    { status: data.status },
    config
  );

  return responce.data;
};

const getAdd = async () => {
  const responce = await axios.get(`${base_url}user/address/`, config);

  return responce.data;
};

const getoneAdd = async (id) => {
  const responce = await axios.get(`${base_url}user/address/${id}`, config);

  return responce.data;
};

const updateAdd = async (data) => {
  const responce = await axios.put(
    `${base_url}user/update-address/${data.id}`,
    data.address,
    config
  );

  return responce.data;
};
const newAdd = async (data) => {
  const responce = await axios.post(
    `${base_url}user/save-address/`,
    data,
    config
  );

  return responce.data;
};
const deleteAdd = async (id) => {
  const responce = await axios.delete(
    `${base_url}user/delete-address/${id}`,
    config
  );

  return responce.data;
};

export const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductFromCart,
  createOrder,
  getUserOrders,
  updateUser,
  forgotPassToken,
  resetPass,
  emptyCart,
  updateOrder,
  getAdd,
  deleteAdd,
  updateAdd,
  newAdd,
  getoneAdd,
};
