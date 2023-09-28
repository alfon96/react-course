import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';

function App() {
  
  return (
    <div className="App">
      <TodosContextProvider>
       <>
        <Todos />
        <NewTodo  /></>
      </TodosContextProvider>
    </div>
  );
}

export default App;
