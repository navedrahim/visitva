import api from './apiConfig.js';

export const getPosts = async () => {
  try {
    const resp = await api.get('/posts');
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const resp = await api.get(`/posts/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};