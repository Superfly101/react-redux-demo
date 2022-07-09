import { configureStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      count: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      count: state.counter - 1,
    };
  }
  return state;
};

const store = configureStore(counterReducer);

export default store;
