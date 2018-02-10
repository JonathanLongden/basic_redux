// import {
//     ADD_BEER,DELETE_BEER,UPDATE_BEER
//   } from '../actions/beers';
  
  
//   function getNums(state){
//     let nums = []
//     for(let i = 0; i < state.length; i++){
//         nums.push(state[i].id)
//     }
//     return nums;
//   }
  
//   function CreateNewId(Arr){
//     let id = 0
//     while (Arr.indexOf(id) > -1) {
//       id ++;
//     }
//     return id;
  
//   }
  
//   function NewId(state){
//     if(state){
//       var ArrayOfIds = getNums(state);
//       var NewId = CreateNewId(ArrayOfIds);
//       return NewId;
//     }
//     else
//     {
//       return 0;
//     }
//   }
  
//   export default function beers(state = [], action) {
//     switch (action.type) {
//       case ADD_BEER:
//         const New3Id = NewId(state);
//         return [
//           ...state,
//           {
//             id: New3Id,
//             name: action.beer.name,
//             brewery: action.beer.brewery,
//             alcoholContent: action.beer.alcoholContent
//           }
//         ]
//       case UPDATE_BEER:
//           return state.map((s) => {
//           //this allows strings to be compared to Numbers
//           if (s.id != action.beer.id) {
//             return s;
//           }
//           //return action.beer;
//           return action.beer;
//         });
//       case DELETE_BEER:
//         const newState = Object.assign([], state);
//         const indexOfBeerToDelete = state.findIndex(beer => {
//           return beer.id === action.beer.id;
//         })
//         newState.splice(indexOfBeerToDelete, 1);
//         //browserHistory.push('/cats');
//         return newState;
//       default:
//         return state;
//     }
//   }