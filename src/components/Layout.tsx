import NavBar from './NavBar'
import InputTodo from './InputTodo'
import TodoList from './TodoList'
import { useState } from 'react'

const Layout = () => {

  const [todos, setTodos] = useState([
    {id : "1", text : 'Complete online JavaScript course'},
    {id : "2", text : 'Jog around the park 3x'},
  ])

  const addTodo = (todo : string) => {
    const newId : string = String(todos.length + 1)
    setTodos([...todos, {id : newId.toString(), text : todo}])
  };

  const deleteTodo = (id : string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };
  
  const handleOnDragEnd = (result : any) => {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  };

  return (
    <div className='flex flex-col justify-center mx-7 pt-[2.5rem]'>
        <NavBar />
        <InputTodo addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} handleOnDragEnd={handleOnDragEnd}/>
    </div>
  )
}

export default Layout