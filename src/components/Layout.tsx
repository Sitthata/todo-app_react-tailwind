import NavBar from "./NavBar";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { useState } from "react";
import EmptyTodo from "./EmptyTodo";
import { useDarkMode } from "../Context/DarkModeProvider";

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

const Layout = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("all");
  const emptyTodo = todos.length === 0;

  const addTodo = (todo: string) => {
    const newId: string = Date.now().toString();
    setTodos([
      ...todos,
      { id: newId, text: todo, isCompleted: false },
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
    <div className="flex flex-col justify-center mx-7 pt-[2.5rem] sm:max-w-[50rem] sm:mx-auto">
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
      <TodoFooter
        todos={todos}
        setTodos={setTodos}
        setFilter={setFilter}
        filter={filter}
      />
      <h1 className="mt-8 font-bold text-center text-secondary-500">Drag and drop to reorder list</h1>
    </div>
  );
};

export default Layout;
