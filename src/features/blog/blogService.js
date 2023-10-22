import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog`);
  if (response.data) {
    return response.data;
  }
};
const getBlog = async (id) => {
  const response = await axios.get(`${base_url}blog/${id}`);
  if (response.data) {
    return response.data;
  }
};

const addRatingBlog = async (data) => {
  const response = await axios.put(
    `${base_url}blog/rating`,
    {
      data,
    },
    config
  );
  if (response.data) {
    return response.data;
  }
};

export const blogService = {
  getBlogs,
  getBlog,
  addRatingBlog,
};
