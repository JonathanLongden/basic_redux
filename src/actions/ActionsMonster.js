export const STANDARDS = {
  ADD_MONSTER :'ADD_MONSTER',
  DELETE_MONSTER : 'DELETE_MONSTER',
  UPDATE_MONSTER : 'UPDATE_MONSTER',
};

export  function addMonster(monster) {
  console.log(monster);
  return {
    type: STANDARDS.ADD_MONSTER,
    monster: Object.assign({}, monster)
  }
}

export function deleteMonster(id) {
  return {
    type: STANDARDS.DELETE_MONSTER,
    id: id
  }
}

export function updateMonster(monster) {
  return {
    type: STANDARDS.UPDATE_MONSTER,
    monster: monster
  }
}


// case DELETE_DOG:
//       return state.filter(dog =>
//         dog.id !== action.id
//       )
//       case UPDATE_DOG:
//       return state.map(dog =>
//         dog.id === action.id ?
//           action.dog :
//           dog
//       )

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
