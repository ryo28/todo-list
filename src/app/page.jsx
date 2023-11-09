"use client";
import { useEffect, useState } from "react";
import { TodoContent } from "@/componets/TodoContent";
import { addTodo, getAllTodos } from "../../utils/supabaseFuntion";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const getTodos = async () => {
    const todo = await getAllTodos();
    setTodos(todo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === "") return;

    //Todoの追加
    await addTodo(title);
    setTitle("");
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div className="flex justify-center pt-5">
        <div className="space-y-3">
          <form className="flex gap-x-2" onSubmit={(e) => handleSubmit(e)}>
            <input
              className="border border-gray-500"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="文字を入力してください"
            />
            <button className="rounded-lg bg-green-200 p-1 shadow-md">
              Add
            </button>
          </form>
          <TodoContent todos={todos} getTodos={getTodos} />
        </div>
      </div>
    </>
  );
}
