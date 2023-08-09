/* eslint-disable react/prop-types */

export default function TodoItem(props) {

  return (
    <div className="flex w-full items-center bg-slate-100 px-3">
        <h1 className={`text-sm w-4/6 py-1 font-bold leading-6 ${props.isComplete ? "line-through" : ""}`}>{props.todo}</h1>
        <button
            type="submit"
            onClick={(e) => props.handleComplete(props.id, e)}
            className="flex w-1/6 ms-auto justify-center rounded-md bg-green-600 p-1 text-xs font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Done
        </button>
        <button
            type="submit"
            onClick={() => props.handleUpdateForm(props.todo, props.id)}
            className="cursor-not-allowed disabled:bg-gray-500 flex mx-2 w-1/6 justify-center rounded-md bg-yellow-600 p-1 text-xs font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={props.isEditing}
        >
            Update
        </button>
        <button
            type="submit"
            onClick={(e) => props.handleDelete(props.id, e)}
            className="flex w-1/6 justify-center rounded-md bg-red-600 p-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Delete
        </button>
    </div>
  )
}
