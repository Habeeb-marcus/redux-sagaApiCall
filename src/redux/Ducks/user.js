// create the action to use out of the counter component in the source folder
export const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// increment action
export const getUser = () => {
  console.log("called getUser");
  return {
    type: GET_USER
  };
};

// decrement action
export const setUser = (user) => {
  return {
    type: SET_USER,
    user // (user)is the shorthand to (user: user)
  };
};

// the state
const initialState = {
  user: undefined
};

export default (state = initialState, action) => {
  console.log("our action value:", action);
  switch (action.type) {
    case SET_USER:
      console.log(action, "action.setUser");
      const { user } = action;
      return { ...state, user };
    default:
      return state;
  }
};
