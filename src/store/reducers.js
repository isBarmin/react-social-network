import { reducer as formReducer } from 'redux-form';
import authReducer from './auth/reducer';
import profileReducer from './profile/reducer';
import dialogsReducer from './dialogs/reducer';
import usersReducer from './users/reducer';

const reducers = {
  authReducer,
  profileReducer,
  dialogsReducer,
  usersReducer,
  form: formReducer,
};

export default reducers;
