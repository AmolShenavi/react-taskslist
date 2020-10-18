import { TYPED_MESSAGE } from "../actions/message";

const intialState = {
  tasks: [],
};

function messageReducer(state = intialState, action) {
  console.log(state, action);
//  @AmolShenavi
switch (action.type) {
    case TYPED_MESSAGE: {
      if(action.payload !== ""){
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      }
      return 0;
    }
    default:
      return state;
  }
}

export default messageReducer;
