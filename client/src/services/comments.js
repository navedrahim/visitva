import api from "./apiConfig";

export const getComments = async (id) => {
  try {
    const resp = await api.get(`/posts/${id}/comments`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (id, commentData) => {
  try {
    const resp = await api.post(`posts/${id}/comments`, commentData)
    return resp.data
  } catch (error) {
    throw error
  }
}