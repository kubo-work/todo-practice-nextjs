"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { TodoType } from "../types/TodoType";

export type TodosListContextType = {
  todos: Array<TodoType> | null;
  setTodos: Dispatch<SetStateAction<Array<TodoType>>>;
};

export const TodosListContent = createContext<TodosListContextType>(
  {} as TodosListContextType
);

export const TodoProviders = (props: { children: ReactNode }) => {
  const { children } = props;
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  return (
    <TodosListContent.Provider
      value={{
        todos,
        setTodos,
      }}
    >
      {children}
    </TodosListContent.Provider>
  );
};
