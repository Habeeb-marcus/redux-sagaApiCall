import React, { useEffect } from "react";
import Counter from "./counter";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/Ducks/user";
import { actionChannel } from "redux-saga/effects";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // const user = useSelector((state) => state.user.user);
  // console.log();

  const user = useSelector((state) => {
    return state.user.user;
  });

  const count = useSelector((state) => state.counter.count);
  const voters = ["Babtunde John", "Adedoyin Makusota", "Mobalaji Smith"];
  return (
    <div className="App">
      {JSON.stringify(user)}

      <h1> Hello, {user.lastName}</h1>
      <h1> Redux made easy</h1>
      <h2> Total Votes: {count} </h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}
