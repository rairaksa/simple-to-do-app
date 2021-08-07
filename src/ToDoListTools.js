function ToDoListTools() {
    return (
        <div className="flex flex-row justify-between items-center mt-8">
            <p className="flex-shrink text-gray-600 text-base font-light tracking-wider">3 Items Left</p>
            <div className="flex-grow flex flex-row justify-center items-center gap-4 text-gray-600 text-basee font-light tracking-wider">
                <a className="rounded-md bg-blue-600 text-gray-100 py-1 px-2" href="#">All</a>
                <a href="#">Active</a>
                <a href="#">Complete</a>
            </div>
            <a className="text-gray-600 text-base font-light tracking-wider" href="#">Clear Completed</a>
        </div>
    )
}

export default ToDoListTools;