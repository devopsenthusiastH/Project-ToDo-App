import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import List from "./List";

const Title = () => {
  const [todolist, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
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

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div className="">
      <div className=" flex flex-col items-center pt-20 min-h-screen bg-gradient-to-b from-purple-300 via-orange-100 to-pink-100">
        <div className=" w-3/4 px-6">
          <div className=" flex items-center gap-3 pl-6 mt-8">
            <FontAwesomeIcon className=" text-2xl" icon={faCalendarPlus} />
            <h1 className=" text-3xl">To-Do List </h1>
          </div>
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
          <div>
            {todolist.map((item, index) => {
              return (
                <List
                  key={index}
                  text={item.text}
                  id={item.id}
                  isComplete={item.isComplete}
                  deleteTodo={deleteTodo}
                  toggle={toggle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
