import { api } from '../../dal/api';
import { setAuthUserDataAC } from './reducer';

// eslint-disable-next-line import/prefer-default-export
export const auth = () => (dispatch) => {
  api.auth().then((response) => {
    const { resultCode, data } = response;
    if (resultCode === 0) {
      dispatch(setAuthUserDataAC(data));
    }
  });
};
