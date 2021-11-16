import { Menu, Transition } from "@headlessui/react";
import React, { useState, Fragment, useContext, MouseEvent, useEffect } from "react";
//import NoteColorChanger from "./NoteColor";
import { NewComponentContext } from "../../../Context/NewComponentContext";
//import NoteMenu from "./NoteMenu";

interface INote {
  id: any;
}

const handleSubmit = async () => {
  // const url = 'https://localhost:5001/Note'
  // const response = await fetch(url, {
  //   method: 'POST',
  //   mode: 'cors',
  // })
  // const result = await response.json()
  // return result
};

const Note: React.FC<INote> = ({ id }) => {
  const [content, setContent] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [color, setColor] = useState<string>();
  const { deleteComponent } = useContext(NewComponentContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleColor = (notecolor: string) => {
    setColor(notecolor);
  };

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
    console.log(title);
  };

  useEffect(() => {

      handleSubmit().then((res) => {
        console.log("posted")
      })

  }, [])

  console.log(title);
  return (
    <div
      className={`${color} h-68 w-64 bg-yellow-200 text-black rounded-lg p-2 shadow-lg`}
    >
      <div className="flex justify-between items-center pb-3">
        <button onClick={() => handleSubmit}>Send</button>
          <input
            className={`${color} border-none bg-yellow-200 rounded-lg h-8 w-40 font-bold font-Inter`}
            type="text"
            name="Note"
            value="Notes"
            onChange={(event) => handleTitle}
          />
        
        {/* <NoteMenu id={id} handleColor={handleColor} /> */}
      </div>

      <textarea
        className={`${color} bg-yellow-200 font-Inter w-full h-48 border-none focus:border-none focus:ring-0 resize-none`}
        onChange={() => {
          handleChange;
        }}
      />
    </div>
  );
};
export default Note;
