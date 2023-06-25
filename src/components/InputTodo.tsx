import { Input } from "@mantine/core";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { useState } from 'react';

interface Props {
  addTodo: (todo: string) => void;
}

const InputTodo = ({ addTodo }: Props) => {

  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e : React.KeyboardEvent) => {
    if(e.key === 'Enter') {
      addTodo(inputValue)
      setInputValue('')
    }
  };

  
  return (
    <div className="mt-5">
      <Input
        placeholder="Create a new todo..."
        icon={<RiCheckboxBlankCircleLine />}
        size="xl"
        variant="filled"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTodo}
        value={inputValue}
        radius="md"
        styles={{
          input: {
            backgroundColor: "hsl(235, 24%, 19%)",
            color: "#FFF",
          },
        }}
      />
    </div>
  );
};

export default InputTodo;
