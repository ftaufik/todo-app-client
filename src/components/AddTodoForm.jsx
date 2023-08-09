/* eslint-disable react/prop-types */
import { useState } from "react";
import { addTodos } from "../redux/todoSlice";
import { useDispatch } from "react-redux";


export default function AddTodoForm() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const userId = localStorage.getItem('userId');

    function handleChangeAdd(e) {
        setValue(e.target.value);
    }

    function handleSubmitAdd() {
        dispatch(addTodos({id: userId, todo: value}));
        setValue("");
    }
  return (
    <div className="flex">
        <input
          id="todo"
          name="todo"
          type="todo"
          autoComplete="current-todo"
          required
          placeholder="Add Todo"
          value={value}
          onChange={handleChangeAdd}
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          type="submit"
          onClick={handleSubmitAdd}
          className="flex ms-3 w-1/4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add
        </button>
    </div>
  )
}
