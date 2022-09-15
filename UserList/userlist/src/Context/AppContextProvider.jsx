import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { reducer } from "../Reducer/Reducer";
import { UserData } from "../Reducer/UserData";

export const AppContext = createContext();

//CREATED APPCONTEXT PROVIDER TO TRIGGER EVENT

export const AppContextProvider = ({ children }) => {
  //CREATE STATE,ACTION AND DISPATCHER FOR GLOBALLY USE
  const [state, dispatch] = useReducer(reducer, UserData);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
