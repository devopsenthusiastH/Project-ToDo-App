import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const List = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className=" flex max-w-5xl items-center my-2 mx-2 gap-2 ">
      <div
        onClick={() => {
          toggle(id);
        }}
        className=" flex flex-1 items-center cursor-pointer gap-2 "
      >
        <FontAwesomeIcon icon={isComplete ? faCircleCheck : faCircle} />
        <p
          className={`text-[17px] max-w-5xl ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <FontAwesomeIcon
        onClick={() => {
          deleteTodo(id);
        }}
        className=" text-gray-400 text-xl hover:text-gray-600"
        icon={faTrash}
      />
    </div>
  );
};

export default List;
