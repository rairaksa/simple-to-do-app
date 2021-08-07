import ToDoListTools from './ToDoListTools.js'

function ToDoList() {
    return (
        <div className="w-full h-auto py-6 px-6 bg-gray-100 rounded-md shadow-md">
            <ul className="flex flex-col divide-y border-gray-600">
                <li className="flex flex-row py-2 m-0 gap-4 items-center">
                    <input id="comments" name="comments" type="checkbox" class="flex-shrink focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" checked/>
                    <p className="flex-grow p-0 text-gray-800 line-through">Boil water in saucepan</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </li>
                <li className="flex flex-row py-2 m-0 gap-4 items-center">
                    <input id="comments" name="comments" type="checkbox" class="flex-shrink focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    <p className="flex-grow p-0 text-gray-800">Put an egg into saucepan</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </li>
                <li className="flex flex-row py-2 m-0 gap-4 items-center">
                    <input id="comments" name="comments" type="checkbox" class="flex-shrink focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    <p className="flex-grow p-0 text-gray-800">Submerge the egg in water</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </li>
                <li className="flex flex-row py-2 m-0 gap-4 items-center">
                    <input id="comments" name="comments" type="checkbox" class="flex-shrink focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                    <p className="flex-grow p-0 text-gray-800">Peel the egg and enjoy it</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </li>
            </ul>
            <ToDoListTools />
        </div>
    )
}

export default ToDoList;