import React, { useReducer, useState, useEffect } from "react";
import ComponentReducer from "../Context/ComponentReducer";

const NewComponentState: NewComponentsState = {
  components: [],
  addComponent: () => {},
  deleteComponent: () => {},
};

export const useComponents = (initialState = NewComponentState) => {
  const [state, dispatch] = useReducer(ComponentReducer, initialState);

  useEffect(() => {
    if (initialState !== NewComponentState) {
      dispatch({ type: "SET_COMPONENTS", payload: initialState });
    }
  }, [initialState]);

  const addComponent = (component: any) => {
    dispatch({
      type: "ADD_COMPONENT",
      payload: component,
    });
  };
  const deleteComponent = (component: any) => {
    dispatch({
      type: "DELETE_COMPONENT",
      payload: component,
    });
  };

  return { components: state.components, deleteComponent, addComponent };
};
