import * as React from "react";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [rörUtg, setRörUtg] = useState([]);
  const [fasUtg, setFasUtg] = useState([]);
  const [sumRörUtg, setSumRörUtg] = useState(0);
  const [SumFasUtg, setSumFasUtg] = useState(0);
  const [inkomst, setInkomst] = useState(0);

  const state = {
    rörUtg,
    setRörUtg,
    fasUtg,
    setFasUtg,
    sumRörUtg,
    setSumRörUtg,
    SumFasUtg,
    setSumFasUtg,
    inkomst,
    setInkomst,
  };
  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;
