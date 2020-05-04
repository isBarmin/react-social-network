// eslint-disable-next-line import/prefer-default-export
import { api } from '../../dal/api';
import { setUserProfileAC } from './reducer';

// eslint-disable-next-line import/prefer-default-export
export const getUserProfile = (userId) => (dispath) => {
  api.getProfile(userId).then((data) => {
    dispath(setUserProfileAC(data));
  });
};
