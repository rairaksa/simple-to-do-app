import { useEffect } from "react";

function ToDoList(props) {    

    const todos = props.todos;
    const setTodos = props.setTodos;

    const remaining = props.remaining;
    const setRemaining = props.setRemaining;

    const filter = props.filter;
    const setFilter = props.setFilter;

    // handle delete

    const handleDelete = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    // handle change

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

        setTodos(newTodos);
    }

    // handle filter

    const filterMap = {
        all: () => true,
        active: todo => !todo.isComplete,
        complete: todo => todo.isComplete
    }

    const handleFilter = (name) => {
        const newFilter = name;
        setFilter(newFilter);
        setTodos(todos);
    }

    // handle clear complete

    const handleClearComplete = () => {
        const newTodos = todos.filter(todo => todo.isComplete !== true);
        setTodos(newTodos);
    }
    
    // handle counter

    useEffect(() => {
        const remainingTodos = todos.filter(todo => todo.isComplete !== true);
        let counter = remainingTodos.length;
        setRemaining(counter);
    });

    return (
        <div className="w-full h-auto py-6 px-6 bg-gray-100 rounded-md shadow-md">
            <ul className="flex flex-col divide-y border-gray-600">
                {                    
                    todos.filter(filterMap[filter]).map((todo) => (
                        <li className="flex flex-row py-2 m-0 gap-4 items-center" key={todo.id}>
                            <input type="checkbox" class="flex-shrink focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" checked={todo.isComplete ? 'checked' : null} onChange={() => handleChange(todo.id)}>
                            </input>
                            <p className={"flex-grow p-0 text-gray-800 "+ (todo.isComplete ? 'line-through' : null ) }>{todo.title}</p>
                            <button className="bg-red-600 hover:bg-red-800 p-2 rounded-md text-white transition" onClick={() => handleDelete(todo.id)}>
                                <span>
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </li>
                    ))
                }
            </ul>
            <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center mt-8">
                <p className="flex-shrink order-3 lg:order-1 text-gray-600 text-sm font-light tracking-wider">{ remaining } Items Left</p>
                <div className="flex-grow flex flex-row order-1 lg:order-2 justify-center items-center gap-2 text-sm text-gray-600 text-basee font-light tracking-wider">
                    <button className={"rounded-md " + (filter === 'all' ? 'bg-blue-600 text-gray-100' : "bg-transparent text-gray-600" ) + " hover:bg-blue-800 hover:text-gray-100 py-1 px-2 transition"} onClick={() => handleFilter('all')}>All</button>
                    <button className={"rounded-md " + (filter === 'active' ? 'bg-blue-600 text-gray-100' : "bg-transparent text-gray-600" ) + " hover:bg-blue-800 hover:text-gray-100 py-1 px-2 transition"} onClick={() => handleFilter('active')}>Active</button>
                    <button className={"rounded-md " + (filter === 'complete' ? 'bg-blue-600 text-gray-100' : "bg-transparent text-gray-600" ) + " hover:bg-blue-800 hover:text-gray-100 py-1 px-2 transition"} onClick={() => handleFilter('complete')}>Complete</button>
                </div>
                <a className="order-2 lg:order-3 text-sm text-gray-600 font-light tracking-wider rounded-md py-1 px-2 hover:bg-red-800 hover:text-white transition" href="#" onClick={() => handleClearComplete() }>Clear Completed</a>
            </div>
        </div>
    )
}

export default ToDoList;