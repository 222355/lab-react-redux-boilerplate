import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementLike, decrementLike } from "./Actions.jsx";
function ReduxLikeCounter() {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.likes);

  return (
    <div>
      <h1>Like Counter: {likes}</h1>
      <button onClick={() => dispatch(incrementLike())}>Like</button>
      <button onClick={() => dispatch(decrementLike())}>Unlike</button>
    </div>
  );
}
export default ReduxLikeCounter;
