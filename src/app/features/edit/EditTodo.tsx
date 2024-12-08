"use client";

import React, { FC, useEffect } from "react";
import { useEditTodo } from "../hooks/useEditTodo";
import PrimaryButton from "@/app/components/PrimaryButton";
import { blue, green, red } from "@mui/material/colors";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import BoxItem from "./BoxItem";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import Link from "next/link";
import { getFormatParseDateTime } from "@/utils/dateFormat";
import { statusLabelsObject } from "@/utils/statusLabels";
import { TodoType } from "@/app/types/TodoType";

type Props = {
  editTodoData?: TodoType;
};

const EditTodo: FC<Props> = React.memo(function EditTodo(props) {
  const { editTodoData } = props;
  const {
    handleChangeInputText,
    handleChangeEndDate,
    handleClickAddTodo,
    handleChangeStatus,
    handleClickUpdateTodo,
    handleClickDeleTodo,
    todo,
    setTodo,
  } = useEditTodo();

  useEffect(() => {
    editTodoData && setTodo(editTodoData);
  }, [editTodoData, setTodo]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "50% 20% 30%" }}>
        <BoxItem header="TODO">
          <TextField
            value={todo.title}
            onChange={handleChangeInputText}
            placeholder="タスクを入力"
          />
        </BoxItem>
        <BoxItem header="ステータス">
          <Select value={todo.status} onChange={handleChangeStatus}>
            {Object.entries(statusLabelsObject).map(([key, value]) => {
              if (key !== "all") {
                return (
                  <MenuItem key={key} value={key}>
                    {value.label}
                  </MenuItem>
                );
              }
            })}
          </Select>
        </BoxItem>
        <BoxItem header="期限日">
          <DateTimePicker
            value={getFormatParseDateTime(todo.end_date)}
            onChange={handleChangeEndDate}
            format="yyyy年M月d日 HH:mm"
          />
        </BoxItem>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: 2,
        }}
      >
        {editTodoData ? (
          <>
            <PrimaryButton bg={blue[400]} onClick={handleClickUpdateTodo}>
              更新
            </PrimaryButton>
            <PrimaryButton bg={red[400]} onClick={handleClickDeleTodo}>
              削除
            </PrimaryButton>
          </>
        ) : (
          <PrimaryButton bg={blue[400]} onClick={handleClickAddTodo}>
            登録
          </PrimaryButton>
        )}
        <Link href="/" as="/">
          <PrimaryButton bg={green[400]}>戻る</PrimaryButton>
        </Link>
      </Box>
    </LocalizationProvider>
  );
});

export default EditTodo;
