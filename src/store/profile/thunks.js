// eslint-disable-next-line import/prefer-default-export
import { api } from '../../dal/api';
import { setProfileStatusAC, setUserProfileAC } from './reducer';

export const getUserProfile = (userId) => (dispath) => {
  api.getProfile(userId).then((data) => {
    dispath(setUserProfileAC(data));
  });
};

export const getProfileStatus = (userId) => (dispatch) => {
  api.getProfileStatus(userId).then((status) => {
    dispatch(setProfileStatusAC(status));
  });
};

export const updateProfileStatus = (status) => (dispatch) => {
  api.updateProfileStatus(status).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setProfileStatusAC(status));
    }
  });
};
