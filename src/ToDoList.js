import { useEffect } from "react";

function ToDoList(props) {    

    const todos = props.todos;
    const setTodos = props.setTodos;

    const remaining = props.remaining;
    const setRemaining = props.setRemaining;

    let filter = 'all';

    const handleDelete = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    const handleChange = (id) => {
        const newTodos = todos.map(todo => {
            if(todo.id === id) {
                let state = false;
                if(!todo.isComplete) {
                    state = true;
                }
                return {
                    ... todo,
                    isComplete: state
                };
            }
            else {
                return {
                    ... todo
                }
            }
        });

        console.log(newTodos);

        setTodos(newTodos);
    }

    const handleFilter = (name) => {
        filter = name;
        setTodos(todos);
    }

    const handleClearComplete = () => {
        const newTodos = todos.filter(todo => todo.isComplete !== true);
        setTodos(newTodos);
    }
    
    // remaining
    useEffect(() => {
        const remainingTodos = todos.filter(todo => todo.isComplete !== true);
        let counter = remainingTodos.length;
        setRemaining(counter);
    });

    return (
        <div className="w-full h-auto py-6 px-6 bg-gray-100 rounded-md shadow-md">
            <ul className="flex flex-col divide-y border-gray-600">
                {
                    todos.map((todo) => (
                        <li className="flex flex-row py-2 m-0 gap-4 items-center" key={todo.id}>
                            <input type="checkbox" class="flex-shrink focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" checked={todo.isComplete ? 'checked' : null} onChange={() => handleChange(todo.id)}/>
                            <p className={"flex-grow p-0 text-gray-800 "+ (todo.isComplete ? 'line-through' : null ) }>{todo.title}</p>
                            <button className="bg-red-600 hover:bg-red-800 p-2 rounded-md text-white" onClick={() => handleDelete(todo.id)}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </button>
                        </li>
                    ))
                }
            </ul>
            <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center mt-8">
                <p className="flex-shrink order-3 lg:order-1 text-gray-600 text-sm font-light tracking-wider">{ remaining } Items Left</p>
                <div className="flex-grow flex flex-row order-1 lg:order-2 justify-center items-center gap-2 text-gray-600 text-basee font-light tracking-wider">
                    <button className="rounded-md text-sm bg-blue-600 text-gray-100 hover:bg-blue-800 hover:text-gray-100 py-1 px-2" onClick={() => handleFilter('all')}>All</button>
                    <button className="rounded-md bg-transparent text-sm text-gray-600 hover:bg-blue-800 hover:text-gray-100 py-1 px-2" onClick={() => handleFilter('active')}>Active</button>
                    <button className="rounded-md bg-transparent text-sm text-gray-600 hover:bg-blue-800 hover:text-gray-100 py-1 px-2" onClick={() => handleFilter('complete')}>Complete</button>
                </div>
                <a className="order-2 lg:order-3 text-sm text-gray-600 font-light tracking-wider" href="#" onClick={() => handleClearComplete() }>Clear Completed</a>
            </div>
        </div>
    )
}

export default ToDoList;