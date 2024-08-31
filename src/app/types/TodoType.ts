import { TodosStatusType } from "./TodosStatusType";

export type TodoType = {
    id: number;
    title: string;
    created_date: string;
    end_date: string;
    status: keyof TodosStatusType;
}
