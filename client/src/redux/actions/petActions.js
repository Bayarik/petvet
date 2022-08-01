import { errorShowAC } from './errorAction';

export const getPetAC = (data) => ({ type: 'PET_GET_ALL', payload: data });
export const getOnePetAC = (data) => ({ type: 'PET_GET_ONE', payload: data });
export const addPetAC = (data) => ({ type: 'PET_ADD', payload: data });

export const getPetThunk = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3010/api/v1/pets/${id}`);
  const data = await response.json();
  console.log(data, '<<<<<<<<<, data');
  dispatch(getOnePetAC(data));
};

export const addPetThunk = (petForm) => async (dispatch) => {
  const response = await fetch('http://localhost:3010/api/v1/pets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(petForm),
  });
  if (response.ok) {
    const pet = await response.json();
    dispatch(addPetAC(pet));
    return;
  }
  const { errorMessage } = await response.json();
  dispatch(errorShowAC(errorMessage));
};
