
import React, { useContext, useEffect, useState } from "react";
import NewComponentMenu from "../../components/NewComponentMenu";
import Container from "../../components/NewComponents/Container/Container";
import Note from "../../components/NewComponents/Note/Note";
import Photo from "../../components/NewComponents/Photo/Photo";
import TodoList from "../../components/NewComponents/TodoList/TodoList";
import Link from "../../components/NewComponents/Link/Link";
import { NewComponentContext, NewComponentProvider } from "../../Context/NewComponentContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface IBoard {
  boardId: number;
}
const newComponents: any = {
  1: TodoList,
  2: Photo,
  3: Note,
  4: Link,
  5: Container,
};

const BoardId = () => {
  const { components } = useContext(NewComponentContext);
  //map through the components array and render
  const componentList = components.map((component, i) => {
    const id = component.componentType;
    const NewComponent = newComponents[id];

    //check if the newComponents object value matches what's in the array so it knows what type to render
    for (const property in newComponents) {
      const value = parseInt(property);
      if (value == id) {
        return (
          <div key={component.id}>
            <NewComponent id={component.id} />
          </div>
        );
      }
    }
  });

  return (
    <div>
      <div
        style={{ height: "calc(100vh - 3rem)" }}
        className={` flex space-x-10 dark:bg-gray-700 w-screen z-0`}
        >
        
      
        <DndProvider backend={HTML5Backend}>
          <NewComponentMenu />
          <div className="grid grid-cols-6 gap-8 ml-4 mt-10 dark:bg-gray-700">
            {componentList}
          </div>
        </DndProvider>
       
      </div>
    </div>
  );
};

export default BoardId;
