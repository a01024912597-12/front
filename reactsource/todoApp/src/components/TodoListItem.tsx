import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdNotificationImportant, MdRemoveCircleOutline } from "react-icons/md";
import type { TodoProps } from "../types/todo";

const TodoListItem = ({ todo, onDelete, onUpdate }: TodoProps) => {
  const { id, title, completed, important } = todo;

  console.log("TodoListItem rendered");

  const CheckboxIcon = completed ? MdCheckBox : MdCheckBoxOutlineBlank;

  return (
    <div className="flex items-center p-4 even:bg-gray-200">
      <div className="flex grow items-center">
        <CheckboxIcon onClick={() => onUpdate(id)} />

        <div className="ml-2 flex items-center">
          {important && <MdNotificationImportant className="mr-1 text-red-500" />}

          <span className={completed ? "text-gray-400 line-through" : ""}>{title}</span>
        </div>
      </div>

      <div className="flex cursor-pointer items-center text-2xl text-red-300 hover:text-red-600">
        <MdRemoveCircleOutline onClick={() => onDelete(id)} />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
