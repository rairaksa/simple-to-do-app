import { useState } from "react";
import ToDoList from "./ToDoList";

function ToDoForm() {

    const [todos, setTodos] = useState([
        {
            id:1,
            isComplete:true,
            title:'Boil water in saucepan'
        },
        {
            id:2,
            isComplete:false,
            title:'Put the egg in saucepan'
        },
        {
            id:3,
            isComplete:false,
            title:'Submerge the egg in water'
        },
        {
            id:4,
            isComplete:false,
            title:'Peel and enjoy it!'
        }
    ]);

    return (
        <div className="flex flex-col gap-4">
            <div className="w-full h-auto py-6 px-6 bg-gray-100 rounded-md shadow-md flex flex-row">
                <input type="text" className="flex-grow w-auto h-auto p-2 text-base rounded-l-md outline-none focus:ring focus:border-blue-300" placeholder="Input task" value=''/>
                <button className="flex-shrink w-auto h-auto py-2 px-8 text-base rounded-r-md bg-blue-600 text-gray-100 hover:bg-blue-800 hover:text-gray-100">Add</button>
            </div>
            <ToDoList todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default ToDoForm;