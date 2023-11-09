import { IconX } from "@tabler/icons-react";
import { deleteTodo } from "../../utils/supabaseFuntion";

export function TodoContent({ todos, getTodos }) {
  const handleDelete = async (id) => {
    await deleteTodo(id);
    getTodos();
  };

  return (
    <ul className="space-y-1.5">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between rounded-sm bg-orange-200 px-1"
        >
          <div className="flex gap-2">
            <div>✅</div>
            <div>{todo.title}</div>
          </div>
          <button onClick={() => handleDelete(todo.id)}>
            <IconX size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}
