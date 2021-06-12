import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, setvotes } from "./redux/Ducks/counter";

const Counter = (props) => {
  const { name } = props;
  const dispatch = useDispatch();
  const [votes, setVotes] = useState(0);

  const handleIncrement = () => {
    dispatch(increment());
    setVotes(votes + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement());
    setVotes(votes - 1);
  };

  const handleReset = () => {
    dispatch(reset());
    setVotes(0);
  };

  return (
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      <h2> {name} </h2>
      <h3> {`Votes: ${votes}`}</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}> Increment</button>
        <button onClick={handleDecrement}> Decrement</button>
        <button onClick={handleReset}> Reset</button>
      </div>
    </div>
  );
};

export default Counter;
