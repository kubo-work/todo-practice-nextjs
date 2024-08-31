import { TodoType } from "@/app/types/TodoType";
import { supabase } from "./supabase"
import { EditTodoType } from "@/app/types/EditTodoType";
import { getFormatParseDateTime } from "./dateFormat";
import { ConditionsType } from "@/app/types/ConditionsType";

export const getAllTodos = async (): Promise<{ data: Array<TodoType> | null; }> => {
    const { data } = await supabase.from("todo").select("*").order("id", { ascending: true })
    return { data };
}

export const getSelectTodos = async (conditions: ConditionsType) => {
    if (conditions.filterStatus === "all") {
        const { data } = await supabase.from("todo").select("*").order("id", { ascending: conditions.sortId === "asc" ? true : false })
        return { data };
    } else {
        const { data } = await supabase.from("todo").select("*").eq("status", conditions.filterStatus).order("id", { ascending: conditions.sortId === "asc" ? true : false })
        return { data };
    }
}

export const addTodo = async (todo: EditTodoType) => {
    await supabase.from('todo').insert({ title: todo.title, end_date: getFormatParseDateTime(todo.end_date), status: todo.status })
}

export const getTodo = async (id: number): Promise<{ data: TodoType | null; }> => {
    const { data } = await supabase.from("todo").select("*").eq('id', id).single();
    return { data }
}

export const updateTodo = async (todo: EditTodoType) => {
    await supabase.from('todo').update({ title: todo.title, end_date: getFormatParseDateTime(todo.end_date), status: todo.status }).eq('id', todo.id)
}

export const deleteTodo = async (id: number) => {
    await supabase.from('todo').delete().eq("id", id)
}
