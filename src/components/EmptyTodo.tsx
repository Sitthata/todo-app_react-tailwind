import { BiMessageSquareAdd } from "react-icons/bi";

const EmptyTodo = () => {
  return (
    <div className="flex items-center p-5 flex-col gap-4 justify-center bg-dark-200 min-h-[10rem]">
      <BiMessageSquareAdd className="text-6xl text-secondary-400" />
      <h1 className="font-bold text-secondary-400">
        Empty Todo, Try Add something!
      </h1>
    </div>
  );
};

export default EmptyTodo;
