import { dayOfYearUtc } from "https://deno.land/std@0.195.0/datetime/mod.ts";

// year, day of year
export const YYYYDOY = (date: Date) => {
  return { year: date.getFullYear(), dayOfYear: dayOfYearUtc(date) };
};

export const expiredDate = (currentDate: Date, dayOfExpiration: number) => {
  const { year, dayOfYear } = YYYYDOY(currentDate);
  const dayOfYearExpiration = dayOfYear - dayOfExpiration;

  if (dayOfYearExpiration < 0) {
    return { year: year - 1, dayOfYear: 360 - dayOfYearExpiration };
  }

  return { year: year, dayOfYear: dayOfYearExpiration };
};

interface DayOfYearWithYear {
  year: number;
  dayOfYear: number;
}

export const checkFileIsExpired = (
  fileMetaModified: DayOfYearWithYear,
  expirationDate: DayOfYearWithYear
) => {
  if (fileMetaModified.year > expirationDate.year) {
    // modify year is lower than the expiration date
    return false;
  }
  if (fileMetaModified.dayOfYear > expirationDate.dayOfYear) {
    return false;
  }
  return true;
};
