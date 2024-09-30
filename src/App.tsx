import { createContext, useRef, useState } from "react";

export const Context = createContext(4);
const App = () => {
  return (
    <>
      <div>
        <Context.Provider value={1}></Context.Provider>
      </div>
    </>
  );
};

export default App;
