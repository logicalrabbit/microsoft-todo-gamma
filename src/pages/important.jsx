import Todo from "@/components/todo";
import { TodoThemeProvider, todoThemes } from "@/components/todo-theme-provider";
import { Star } from "@phosphor-icons/react";

function Important() {
  return <TodoThemeProvider theme={todoThemes.nightSky}>
    <Todo title='Important' icon={Star} />
  </TodoThemeProvider>;
}
export { Important };
