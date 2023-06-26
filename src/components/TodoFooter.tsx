import { Paper } from "@mantine/core";

interface Props {
  todos: { id: string, text: string, isCompleted: boolean }[];
  setTodos: (todos : {id: string, text: string, isCompleted: boolean}[]) => void;
  setFilter: (filter : string) => void;
  filter: string;
}

const TodoFooter = ({ todos, setTodos, setFilter, filter } : Props) => {

  const activeItem = todos.filter(todo => todo.isCompleted === false).length;
  const filterOption = ["all", "active", "complete"];
  
  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => todo.isCompleted === false));
  };

  
  return (
    <Paper 
      radius="none"
      style={{
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        backgroundColor: "hsl(235, 24%, 19%)",
        borderBottom: "1px solid hsl(233, 14%, 35%)",
        padding: ".625rem 1.5rem",
        color: "hsl(236, 9%, 61%)",
        borderRadius: "0px 0px 6px 6px",
      }}

    >
      <p>{activeItem} items left</p>
      <div className="flex gap-6">
        {filterOption.map((option, key) => (
          <button className={`capitalize transition-all duration-100 font-bold ${filter === option ? "text-primary-100" : "text-secondary-400"}`} key={key} onClick={() => setFilter(option)}>{option}</button>
        ))}
      </div>
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </Paper>
  )
}

export default TodoFooter