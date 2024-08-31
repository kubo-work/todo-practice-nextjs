import { TodoType } from "./TodoType";

export type EditTodoType = Pick<TodoType, "id" | "title" | "end_date" | "status">
