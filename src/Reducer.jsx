const initialState = {
  likes: 0,
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        likes: state.likes + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        likes: state.likes > 0 ? state.likes - 1 : state.likes,
      };
    default:
      return state;
  }
};

export default Reducer;
