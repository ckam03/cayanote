import React, { createContext, useReducer, useState } from "react";
import ComponentReducer from "./ComponentReducer";

const NewComponentState: NewComponentsState = {
  components: [],
  addComponent: () => {},
  deleteComponent: () => {},
};

export const NewComponentContext =
  React.createContext<NewComponentsState>(NewComponentState);

export const NewComponentProvider: React.FC = ({ children }) => {
  const [components, setComponents] = useState(NewComponentState.components);
  const [state, dispatch] = useReducer(ComponentReducer, NewComponentState);

     const addComponent = (component: any) => {
       dispatch({
         type: "ADD_COMPONENT",
         payload: component
       });
     };
     const deleteComponent = (component: any) => {
       dispatch({
         type: "DELETE_COMPONENT",
         payload: component,
       });
     };

  return (
    <NewComponentContext.Provider
      value={{ components: state.components, deleteComponent, addComponent }}
    >
      {children}
    </NewComponentContext.Provider>
  );
};
