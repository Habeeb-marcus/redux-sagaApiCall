// create the action to use out of the counter component in the source folder
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

// increment action
export const increment = () => ({
  type: INCREMENT
});

// decrement action
export const decrement = () => ({
  type: DECREMENT
});

export const reset = () => ({
  type: RESET
});

// the state
const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: (state.count = 0) };
    default:
      return state;
  }
};
