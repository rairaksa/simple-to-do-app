import Header from './Header.js' 
import ToDoForm from './ToDoForm.js'
import ToDoList from './ToDoList.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="App bg-gray-800 relative w-full min-h-screen pt-20">
      <div className="absolute left-0 top-0 w-full h-72 bg-gradient-to-br from-blue-400 to-blue-600 via-blue-500 z-0">
      </div>
      <div className="absolute top-0 w-full h-auto pt-16">
        <div className="w-1/3 mx-auto flex flex-col gap-4">
          <Header />
          <ToDoForm />
          <ToDoList />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
