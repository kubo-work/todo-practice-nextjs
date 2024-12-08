import { SortIdStatus } from "./SordIdStatus"
import { TodoType } from "./TodoType"

export type ConditionsType = {
    sortId: SortIdStatus,
    filterStatus: TodoType["status"]
}
