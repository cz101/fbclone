import React , {createContext, useContext, useReducer} from "react";

export const StateContext = createContext()
export const StateProvider = ({ reduer, initialState,  children}) => (
 <StateContext.Provider value ={useReducer(reduer, initialState)}> 
   {children}
 </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext)