import { useContext } from "react";
import { TodosListContent, TodosListContextType } from "../providers/TodosListContextType";

export const useTodos = (): TodosListContextType => useContext(TodosListContent)
