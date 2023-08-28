import Todo from "@/components/todo";
import { TodoThemeProvider, todoThemes } from "@/components/todo-theme-provider";
import { Sun } from "@phosphor-icons/react";
function MyDay() {
  return <TodoThemeProvider theme={todoThemes.desk}>
    <Todo title='My Day' icon={Sun}/>
  </TodoThemeProvider>;
}
export { MyDay };
