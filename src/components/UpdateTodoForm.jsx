/* eslint-disable react/prop-types */

export default function UpdateTodoForm(props) {
  console.log(props.updateField.todo);

  return (
    <div className="flex">
        <input
            id="todo"
            name="todo"
            type="todo"
            autoComplete="current-todo"
            required
            placeholder="Update Todo"
            onChange={props.handleChangeUpdate}
            value={props.updateField.todo}
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
            type="submit"
            // onClick={() => console.log(props.updateField.id)}
            onClick={(e) => props.handleSaveUpdate(e)}
            className="flex ms-3 w-1/4 justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Update
        </button>
    </div>
  )
}
