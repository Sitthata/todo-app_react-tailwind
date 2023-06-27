import { Paper } from "@mantine/core";
import { useDarkMode } from "../Context/DarkModeProvider";

interface Props {
  todos: { id: string; text: string; isCompleted: boolean }[];
  setTodos: (
    todos: { id: string; text: string; isCompleted: boolean }[]
  ) => void;
  setFilter: (filter: string) => void;
  filter: string;
}

const TodoFooter = ({ todos, setTodos, setFilter, filter }: Props) => {
  const filterOption = ["all", "active", "complete"];
  const allItem = todos.length;
  const { darkMode } = useDarkMode();

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === false));
  };

  return (
    <>
      <Paper
        radius="none"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: darkMode ? "#FFF" : "hsl(235, 24%, 19%)",
          padding: ".625rem 1.5rem",
          color: "hsl(236, 9%, 61%)",
          borderRadius: "0px 0px 6px 6px",
        }}
      >
        <p>{allItem} items left</p>
        <div className="flex gap-6">
          {filterOption.map((option, key) => (
            <button
              className={`capitalize hidden sm:flex transition-all duration-100 font-bold ${
                filter === option ? "text-primary-100" : "text-secondary-400"
              }`}
              key={key}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </Paper>
      
      {/* Mobile */}
      <div className="flex items-center justify-center gap-10 py-4 mt-5 text-lg rounded-lg sm:hidden bg-dark-200 dark:bg-white">
        {filterOption.map((option, key) => (
          <button
            className={`capitalize transition-all duration-100 font-bold ${
              filter === option ? "text-primary-100" : "text-secondary-400"
            }`}
            key={key}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

export default TodoFooter;
