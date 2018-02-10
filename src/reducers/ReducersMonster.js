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
  export default function Monsters(state = [], action) {
    switch (action.type) {
      case  STANDARDS.ADD_MONSTER:
        const New3Id = NewId(state);
        console.log(action)
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
          return state.map((s) => {
          //this allows strings to be compared to Numbers
          if (s.id != action.beer.id) {
            return s;
          }
          //return action.beer;
          return action.beer;
        });
      case STANDARDS.UPDATE_MONSTER:
        const newState = Object.assign([], state);
        const indexOfBeerToDelete = state.findIndex(beer => {
          return beer.id === action.beer.id;
        })
        newState.splice(indexOfBeerToDelete, 1);
        //browserHistory.push('/cats');
        return newState;
      default:
        return state;
    }
  }