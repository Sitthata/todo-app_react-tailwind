import NavBar from "./NavBar";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { useState } from "react";
import EmptyTodo from "./EmptyTodo";

const Layout = () => {
  const [todos, setTodos] = useState([
    { id: "1", text: "Complete online JavaScript course", isCompleted: false },
    { id: "2", text: "Jog around the park 3x", isCompleted: false },
  ]);

  const [filter, setFilter] = useState("all");

  const emptyTodo = todos.length === 0;

  const addTodo = (todo: string) => {
    const newId: string = Date.now().toString();
    setTodos([
      ...todos,
      { id: newId.toString(), text: todo, isCompleted: false },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };


  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  };

  return (
    <div className="flex flex-col justify-center mx-7 pt-[2.5rem] sm:max-w-[50rem] md:mx-auto">
      <NavBar />
      <InputTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        handleOnDragEnd={handleOnDragEnd}
        filter={filter}
      />
      {emptyTodo && <EmptyTodo />}
      <TodoFooter todos={todos} setTodos={setTodos} setFilter={setFilter} filter={filter}/>
      
    </div>
  );
};

export default Layout;
