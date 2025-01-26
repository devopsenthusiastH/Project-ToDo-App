import { text } from "@fortawesome/fontawesome-svg-core";
import React, { useRef, useState } from "react";

const InputBox = () => {
  const [todolist, setTodoList] = useState([]);
  const inputRef = useRef();
  const add = () => {
    const inputText = inputRef.current.value.trim(); //trim method removes extra spaces from begining
    console.log(inputText);
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  return (
    <div className=" flex items-center my-7 bg-gray-200 rounded-2xl">
      <input
        ref={inputRef}
        className=" bg-transparent flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 outline-none"
        type="text"
        placeholder="Add Your Task"
      />
      <button
        onClick={add}
        className=" border-none rounded-2xl bg-green-400 w-32 h-14 text-lg hover:bg-green-500 cursor-pointer font-semibold"
      >
        ADD
      </button>
    </div>
  );
};

export default InputBox;
