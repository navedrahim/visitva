import api from "./apiConfig";

export const getComments = async (id) => {
  try {
    const resp = await api.get(`/posts/${id}/comments`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};