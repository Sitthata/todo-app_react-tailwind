import { Paper } from "@mantine/core";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import Cross from "../assets/images/icon-cross.svg";

interface Props {
  todo: { id: string, text: string, isCompleted: boolean };
  deleteTodo : (id : string) => void;
  toggleTodo : (id : string) => void;
}

const TodoItem = ({ todo, deleteTodo, toggleTodo }: Props) => {
  
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
  
    <Paper
      radius="xs"
      style={{
        backgroundColor: "hsl(235, 24%, 19%)",
        borderBottom: "1px solid hsl(233, 14%, 35%)",
        padding: "1rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
      className="group"
    >
      <div className="flex gap-5">
        <button className="text-secondary-400" onClick={handleToggle}>
          {todo.isCompleted ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleLine />}
        </button>  
        <h2 className={`text-xl  ${todo.isCompleted ? "line-through text-secondary-400" : "text-secondary-200"}`}>{todo.text}</h2>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:visible">
        <img src={Cross} alt="" />
      </button>
    </Paper>
  );
};

export default TodoItem;
