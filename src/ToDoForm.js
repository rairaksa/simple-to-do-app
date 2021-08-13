import { useState } from "react";
import ToDoList from "./ToDoList";

function ToDoForm() {

    // input handler

    const [inputText, setInputText] = useState('');
    
    const handleInsert = () => {
        insert();
    }

    const handleKeyUp = (event) => {
        if(event.keyCode === 13) {
            insert();
        }
    }

    const insert = () => {
        // get highest id
        let id = 0;

        todos.map((todo) => {
            if(todo.id >= id) {
                id = todo.id + 1;
            }
        })

        setTodos([ ... todos, {
            id:id,
            isComplete:false,
            title:inputText
        }]);
        
        setInputText('');
    }

    // lists

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

    // change handler
    const handleChange = (event) => {
        const newInputText = event.target.value;
        setInputText(newInputText);
    }

    // remaining

    const [remaining, setRemaining] = useState(3);

    // filter

    const [filter, setFilter] = useState('all');

    return (
        <div className="flex flex-col gap-4">
            <div className="w-full h-auto py-6 px-6 bg-gray-100 rounded-md shadow-md flex flex-row">
                <input type="text" className="flex-grow w-auto h-auto p-2 text-base rounded-l-md outline-none focus:ring focus:border-blue-300 transition" placeholder="Input task" value={inputText} onKeyUp={handleKeyUp} onChange={handleChange}/>
                <button className="flex-shrink w-auto h-auto py-2 px-4 lg:px-8 text-base rounded-r-md bg-blue-600 text-gray-100 hover:bg-blue-800 hover:text-gray-100 transition" onClick={() => handleInsert()}>Add</button>
            </div>
            <ToDoList todos={todos} setTodos={setTodos} remaining={remaining} setRemaining={setRemaining} filter={filter} setFilter={setFilter} />
        </div>
    )
}

export default ToDoForm;