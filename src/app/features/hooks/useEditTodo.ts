import { EditTodoType } from "@/app/types/EditTodoType";
import { TodoType } from "@/app/types/TodoType";
import { addTodo, deleteTodo, getTodo, updateTodo } from "@/utils/supabaseFunctions";
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useCallback, useState } from "react"

export const useEditTodo = () => {
    const [todo, setTodo] = useState<EditTodoType>({
        id: 0,
        title: "",
        end_date: new Date().toString(),
        status: 'notStarted'
    })

    const setTodoData = async (id: string) => {
        const { data: getTodoData } = await getTodo(Number(id));
        if (getTodoData) {
            setTodo((prevTodo) => ({
                ...prevTodo,
                id: getTodoData.id,
                title: getTodoData.title,
                status: getTodoData.status,
                end_date: getTodoData.end_date,
            }));
        }
    };

    const handleChangeInputText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTodo((prevTodo) => ({ ...prevTodo, title: e.target.value }));
    }, []);

    const handleChangeEndDate = useCallback((date: Date | null) => {
        if (date && date instanceof Date) {
            setTodo((prevTodo) => ({ ...prevTodo, end_date: date.toString() }));
        }
    }, []);

    const handleChangeStatus = useCallback((e: SelectChangeEvent) => {
        const value = e.target.value as TodoType["status"];
        setTodo((prevTodo) => ({ ...prevTodo, status: value }));
    }, [])

    const handleClickAddTodo = useCallback(async () => {
        if (todo.title === "") {
            alert("タスクを入力してください。");
            return;
        }
        await addTodo(todo);
        alert('登録しました！')
        window.location.href = "/"
    }, [todo]);

    const handleClickUpdateTodo = useCallback(async () => {
        if (todo.title === "") {
            alert("タスクを入力してください。");
            return;
        }
        await updateTodo(todo);
        alert('更新しました！')
        window.location.href = "/"
    }, [todo])

    const handleClickDeleTodo = useCallback(async () => {
        const result = window.confirm('削除しますか？');
        if (result) {
            await deleteTodo(Number(todo.id));
            alert('削除しました！')
            window.location.href = "/"
        } else {
            return;
        }
    }, [todo.id])

    return {
        handleChangeInputText,
        handleChangeEndDate,
        handleChangeStatus,
        handleClickAddTodo,
        handleClickUpdateTodo,
        handleClickDeleTodo,
        todo, setTodo, setTodoData
    }
}
