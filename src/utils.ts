import {
  addDays,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

export function generateFutureDay() {
  const future = addDays(new Date(), 10);
  return future;
}

export function getRemamingRangeTimes(startDate: Date, endDate: Date) {
  const days = Math.max(0, differenceInDays(endDate, startDate));
  const hours = Math.max(0, differenceInHours(endDate, startDate) % 24);
  const minutes = Math.max(0, differenceInMinutes(endDate, startDate) % 60);
  const seconds = Math.max(0, differenceInSeconds(endDate, startDate) % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
