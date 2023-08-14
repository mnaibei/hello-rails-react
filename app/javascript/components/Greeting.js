import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetings } from "../redux/greetings/greetingSlice";
const Greetings = () => {
  const dispatch = useDispatch();
  const { greetings, isLoading, error } = useSelector(
    (state) => state.greetings
  );

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      {/* {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>} */}
      {greetings && <h2>{greetings.greeting}</h2>}
    </div>
  );
};

export default Greetings;
