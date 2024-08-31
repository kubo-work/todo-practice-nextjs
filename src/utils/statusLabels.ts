import { TodosStatusType } from "@/app/types/TodosStatusType";
import { blue, green, yellow } from "@mui/material/colors";

export const statusLabelsObject: TodosStatusType = {
    all: {
        label: "全て",
        rowColor: "white",
    },
    notStarted: {
        label: "未着手",
        rowColor: yellow[200],
    },
    inProgress: {
        label: "進行中",
        rowColor: blue[200],
    },
    done: {
        label: "完了",
        rowColor: green[200],
    },
}
