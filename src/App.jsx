import React from "react";
import { ContextProvider } from "../src/Context/ContextProvider.jsx";
import ComponentA from "./ComponentA.jsx";

const App = () => {
  return (
    <ContextProvider>
      <ComponentA />
    </ContextProvider>
  );
};

export default App;
