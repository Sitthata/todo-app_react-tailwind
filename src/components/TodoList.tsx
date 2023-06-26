import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
interface Props {
  todos: {
    id: string;
    text: string;
    isCompleted: boolean;
  }[];
  deleteTodo: (id: string) => void;
  handleOnDragEnd: (result: any) => void;
  toggleTodo: (id: string) => void;
  filter: string;
}

const TodoList = ({ todos, deleteTodo, handleOnDragEnd, toggleTodo, filter }: Props) => {

  const filterTodo = todos.filter((todo) => {
    if (filter === "all") return todo;
    if (filter === "active") return todo.isCompleted === false;
    if (filter === "complete") return todo.isCompleted === true;
  });
  
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todoList">
        {(provided) => (
          <div
            className="mt-5"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {filterTodo.map((todo, index) => (
              <Draggable draggableId={todo.id} key={todo.id} index={index}>
                {(provided) => 
                  <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                  </div>
                }
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
