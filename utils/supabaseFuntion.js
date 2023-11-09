import { supabase } from "./supabase";
export async function getAllTodos() {
  const todos = await supabase.from("Tasks").select("*");
  return todos.data;
}

export async function addTodo(title) {
  await supabase.from("Tasks").insert({ title: title });
}

export async function deleteTodo(id) {
  await supabase.from("Tasks").delete().eq("id", id);
}
