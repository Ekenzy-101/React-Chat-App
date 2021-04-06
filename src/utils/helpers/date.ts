import { isToday, isYesterday } from "date-fns";

export const getTimeFromISOString = (value: string) => {
  return new Date(value).toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  // .slice(0, 5);
};

export const getDateFromISOString = (value: string) => {
  const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
  const MILLISECONDS_IN_TWO_DAYS = MILLISECONDS_IN_A_DAY * 2;

  const inputDate = new Date(value) as any;
  const todayDate = new Date() as any;
  const diff = todayDate - inputDate;

  if (diff >= MILLISECONDS_IN_A_DAY && diff < MILLISECONDS_IN_TWO_DAYS)
    return "Yesterday";

  if (diff < MILLISECONDS_IN_A_DAY) return getTimeFromISOString(value);

  return inputDate.toLocaleDateString();
};

export const getDateFromDateObject = (date: Date) => {
  if (isToday(date)) return "Today";
  if (isYesterday(date)) return "Yesterday";
  return date.toLocaleDateString(navigator.language, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
