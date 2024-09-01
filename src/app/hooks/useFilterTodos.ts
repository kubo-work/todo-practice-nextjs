
import { useCallback, useEffect, useState } from "react";
import { useTodos } from "./useTodos";
import { TodoType } from "../types/TodoType";
import { SortIdStatus } from "../types/SordIdStatus";
import { SelectChangeEvent } from "@mui/material";
import { getSelectTodos } from "@/utils/supabaseFunctions";
import { ConditionsType } from "../types/ConditionsType";

export const useFilterTodos = () => {
    const { setTodos } = useTodos();
    const [conditions, setConditions] = useState<ConditionsType>({
        sortId: "asc",
        filterStatus: "all"
    })

    const handleChangeSordIdSelect = useCallback((e: SelectChangeEvent<SortIdStatus>) => {
        const value = e.target.value as SortIdStatus;
        setConditions((prevConditions) => (
            { ...prevConditions, sortId: value }
        ))
    }, []);

    const handleChangeFilterStatus = useCallback(
        (e: SelectChangeEvent<TodoType["status"]>) => {
            const value = e.target.value as TodoType["status"];
            setConditions((prevConditions) => (
                { ...prevConditions, filterStatus: value }
            ))
        },
        []
    );

    useEffect(() => {
        const getTodos = async () => {
            const { data: getTodosData } = await getSelectTodos(conditions);
            if (getTodosData) {
                setTodos(getTodosData);
            }
        }
        getTodos();
    }, [conditions, setTodos]);

    return { handleChangeSordIdSelect, handleChangeFilterStatus, conditions, setConditions }
}
