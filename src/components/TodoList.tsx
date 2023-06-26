import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
interface Props {
  todos: {
    id: string;
    text: string;
  }[];
  deleteTodo: (id: string) => void;
  handleOnDragEnd: (result: any) => void;
}

const TodoList = ({ todos, deleteTodo, handleOnDragEnd }: Props) => {

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
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
