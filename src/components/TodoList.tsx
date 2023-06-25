import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
interface Props {
  todos: {
    id: string;
    text: string;
  }[];
  deleteTodo: (id: string) => void;
}

const TodoList = ({ todos, deleteTodo }: Props) => {
  const [todo, updateTodo] = useState(todos);
  
  const handleOnDragEnd = (result : any) => {
    if (!result.destination) return;
    const items = Array.from(todo);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateTodo(items);
  };


  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todoList">
        {(provided) => (
          <div
            className="mt-5"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todos.map((todo, index) => (
              <Draggable draggableId={todo.id} key={todo.id} index={index}>
                {(provided) => 
                  <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <TodoItem todo={todo} deleteTodo={deleteTodo} />
                  </div>
                }
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
