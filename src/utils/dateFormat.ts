import { format, toZonedTime } from "date-fns-tz";

const defineTimeFormat = "yyyy年M月d日 HH:mm"

export const getToZoneDateTime = (date: Date): string => {
    const zonedTime = toZonedTime(date, "Asia/Tokyo");
    return format(zonedTime, defineTimeFormat);
};


export const getFormatParseDateTime = (dateString: string): Date => {
    const zonedTime = toZonedTime(new Date(dateString), "Asia/Tokyo");
    return zonedTime
}
