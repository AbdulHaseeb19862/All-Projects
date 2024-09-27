import React from "react";

function AddTodo() {
  return (
    <div className="w-[100%] flex justify-center mt-4 ">
      <form
        action=""
        className="w-[100%] md:flex md:flex-row flex-col justify-center gap-7"
      >
        <div className="w-100%">
          <input
            type="text"
            className="bg-yellow w-80   md:w-96 h-10 text-white rounded-md p-3 transition-all ease-in duration-500 focus:border-blue-500 focus:border-4 mb-6 md:mb-0"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="w-100%">
          <button className="bg-blue-800  w-32 h-10 rounded-md text-white transition-all duration-500 ease-in hover:bg-blue-900">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
