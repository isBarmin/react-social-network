import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'c83f1797-cc6e-4c83-ac33-975e7f9266ec',
  },
});

// eslint-disable-next-line import/prefer-default-export
export const api = {
  auth: () => {
    return instance.get(`auth/me`).then((response) => response.data);
  },

  requestUsers: (currentPage = 1, pageSize = 10) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow: (userId) => {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },

  unfollow: (userId) => {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },

  getProfile: (userId) => {
    return instance.get(`/profile/${userId}`).then((response) => response.data);
  },

  getProfileStatus: (userId) => {
    return instance
      .get(`/profile/status/${userId}`)
      .then((response) => response.data);
  },

  updateProfileStatus: (status) => {
    return instance
      .put(`profile/status`, { status })
      .then((response) => response.data);
  },
};
