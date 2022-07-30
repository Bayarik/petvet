import { errorShowAC } from './errorAction';

export const userLoginAC = (form) => ({ type: 'USER_LOG_IN', payload: form });
export const userLogoutAC = () => ({ type: 'USER_LOG_OUT' });

export const userLoginThunk = (form) => async (dispatch) => {
  const response = await fetch('http://localhost:3010/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(form),
  });
  if (response.ok) {
    const user = await response.json();
    window.localStorage.setItem('user', JSON.stringify(user));
    return dispatch(userLoginAC(user));
  }
  const { errorMessage } = await response.json();
  console.log(errorMessage);
  return dispatch(errorShowAC(errorMessage));
};

export const userSignupThunk = (form) => async (dispatch) => {
  const response = await fetch('http://localhost:3010/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(form),
  });
  if (response.ok) {
    const user = await response.json();
    window.localStorage.setItem('user', JSON.stringify(user));
    return dispatch(userLoginAC(user));
  }
  const { errorMessage } = await response.json();
  console.log(errorMessage);
  return dispatch(errorShowAC(errorMessage));
};

export const userLogoutThunk = () => async (dispatch) => {
  console.log('tut');
  const response = await fetch('http://localhost:3010/auth/signout', {
    method: 'GET',
    credentials: 'include',
  });
  if (response.ok) {
    window.localStorage.removeItem('user');
    return dispatch(userLogoutAC());
  }
  const { errorMessage } = await response.json();
  console.log(errorMessage);
  return dispatch(errorShowAC(errorMessage));
};
