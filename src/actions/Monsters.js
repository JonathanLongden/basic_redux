export const ADD_MONSTER = 'ADD_MONSTER';
export const DELETE_MONSTER = 'DELETE_MONSTER';
export const UPDATE_MONSTER = 'UPDATE_MONSTER';

export  function addBeer(monster) {
  return {
    type: ADD_MONSTER,
    beer: Object.assign({}, monster)
  }
}
//beer: Object.assign({}, beer), {id: nextBeerId++}

export function deleteBeer(monster) {
  return {
    type: DELETE_MONSTER,
    monster: monster
  }
}

export function updateBeer(monster) {
  console.log(beer);
  return {
    type: UPDATE_BEER,
    monster: monster
  }
}

//https://codereview.stackexchange.com/questions/126574/crud-application-using-react-redux

// export const STANDARDS = {
//   CREATE: 'CREATE_STANDARD',
//   DELETE: 'DELETE_STANDARD',
//   UPDATE: 'UPDATE_STANDARD',
// };

// export const createStandard = (standard) => ({
//   type: STANDARDS.CREATE,
//   standard,
// });

// export const updateStandard = (standard) => ({
//   type: STANDARDS.UPDATE,
//   standard,
// });

// export const deleteStandard = (id) => ({
//   type: STANDARDS.DELETE,
//   id,
// });
