// api/endpoints/boards.js
import apiClient from '../client';

const boardsApi = {
  getAll: () => apiClient.get('/boards'),
  // Add other endpoints later...
};

export default boardsApi;
