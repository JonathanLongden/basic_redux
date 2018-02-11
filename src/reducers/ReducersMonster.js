import {
    STANDARDS
  } from '../actions/ActionsMonster';
  

  function getNums(state){
    let nums = []
    for(let i = 0; i < state.length; i++){
        nums.push(state[i].id)
    }
    return nums;
  }
  
  function CreateNewId(Arr){
    let id = 0
    while (Arr.indexOf(id) > -1) {
      id ++;
    }
    return id;
  
  }
  
  function NewId(state){
    if(state){
      var ArrayOfIds = getNums(state);
      var NewId = CreateNewId(ArrayOfIds);
      return NewId;
    }
    else
    {
      return 0;
    }
  }

  const initialState = [];

  export default function Monsters(state = initialState, action) {
    switch (action.type) {
      case  STANDARDS.ADD_MONSTER:
        const New3Id = NewId(state);
        return [
          ...state,
          {
            id: New3Id,
            name: action.monster.name,
            age: action.monster.age,
            weapon: action.monster.weapon
          }
        ]
      case STANDARDS.DELETE_MONSTER:
          return state.filter(s =>
            s.id !== action.id.id
        )
      case STANDARDS.UPDATE_MONSTER:
        const newState = Object.assign([], state);
        const indexOfBeerToDelete = state.findIndex(monster => {
          return monster.id === action.monster.id;
        })
        newState.splice(indexOfBeerToDelete, 1);

        return newState;
      default:
        return state;
    }
  }