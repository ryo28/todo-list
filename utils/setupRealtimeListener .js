import { supabase } from "./supabase";

export function setupRealtimeListener() {
  try {
    supabase
      .channel("*")
      .on(
        "postgres_changes",
        {
          event: "DELETE",
          schema: "public",
          table: "Tasks",
        },
        (payload) => {
          // 削除操作を検知した際の処理
          console.log("タスクが削除されました", payload);
          // ここでUIを更新するなどの必要なアクションを実行できます
        }
      )
      .subscribe();
  } catch (error) {
    console.error("リアルタイムリスナーエラー:", error);
  }
}
