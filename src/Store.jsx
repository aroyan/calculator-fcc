import React, { useState, createContext } from "react";

const initialState = {
  nomor: 1,
  nama: "Aroyan",
};

export const Context = createContext();

export default function Store({ children }) {
  const [initial, setInitial] = useState(initialState);
  return (
    <Context.Provider value={[initial, setInitial]}>
      {children}
    </Context.Provider>
  );
}
