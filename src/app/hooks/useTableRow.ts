import { getFormatParseDateTime } from "@/utils/dateFormat";
import { statusLabelsObject } from "@/utils/statusLabels";
import { format } from "date-fns-tz";
import { useCallback } from "react";
import { TodoType } from "../types/TodoType";
import { DateTimeInfoType } from "../types/DateTimeInfoType";

export const useTableRow = () => {
    const replaceDateObject = useCallback((dateString: string): DateTimeInfoType => {
        const parseDate = getFormatParseDateTime(dateString);
        return {
            dateTime: format(parseDate, "yyyy-MM-dd HH:mm"),
            labelTime: format(parseDate, "yyyy年MM月dd日 HH:mm"),
        };
    }, []);

    const getStatusLabel = useCallback((status: TodoType["status"]): string => {
        return statusLabelsObject[status]["label"];
    }, []);

    const getRowColor = useCallback((status: TodoType["status"]): string => {
        return statusLabelsObject[status]["rowColor"];
    }, []);
    return { replaceDateObject, getStatusLabel, getRowColor }
}
