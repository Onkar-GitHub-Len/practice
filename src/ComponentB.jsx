import React, { useContext, useState } from "react";
import { AppContext } from "../src/Context/ContextProvider";

const ComponentB = () => {
  const { user, setUser } = useContext(AppContext);
  const [value, setValue] = useState();
  return (
    <div>
      <h2>Component B</h2>
      <p>Current User: {user}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setUser(value);
        }}
      >
        Change User
      </button>
    </div>
  );
};

export default ComponentB;
