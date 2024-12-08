"use client";
import React, { FC, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TodosItem from "./TodosItem";
import { useTodos } from "./hooks/useTodos";
import { TodoType } from "./types/TodoType";

type Props = {
  loadTodos: Array<TodoType> | null;
};

const TodosList: FC<Props> = React.memo((props) => {
  const { todos, setTodos } = useTodos();
  const { loadTodos } = props;
  useEffect(() => {
    loadTodos && setTodos(loadTodos);
  }, [loadTodos, setTodos]);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>タイトル</TableCell>
            <TableCell>ステータス</TableCell>
            <TableCell>作成日</TableCell>
            <TableCell>期限日</TableCell>
            <TableCell>操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos &&
            todos.map((todo) => <TodosItem key={todo.id} todo={todo} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
TodosList.displayName = "TodosList";

export default TodosList;
