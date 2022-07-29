const userLoginAC = (form) => ({ type: 'USER_LOG_IN', payload: form });

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
  const loginError = await response.json();
  return loginError;
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
  const loginError = await response.json();
  return loginError;
};
