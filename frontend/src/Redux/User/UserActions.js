import { setEmail } from './UsersSlice';

export const setUserEmail = (email) => (dispatch) => {
  //   console.log(email);
  dispatch(setEmail(email));
  return;
};