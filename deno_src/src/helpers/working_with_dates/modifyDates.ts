import { dayOfYearUtc } from "https://deno.land/std@0.195.0/datetime/mod.ts";

// year, day of year
export const YYYYDOY = (date: Date) => {
  return { year: date.getFullYear(), dayOfYear: dayOfYearUtc(date) };
};

// const readMeta = async (file: string) => {
//   const fileInfo = await Deno.stat(file);
//   const modDate = new Date(fileInfo.mtime);
//   return YYYYDOY(modDate);
// };

// const expiredDate = () => {
//   const dayOfExpiration = 30;
//   const currentDate = new Date();
//   const { year, dayOfYear } = YYYYDOY(currentDate);

//   const dayOfYearExpiration = dayOfYear - dayOfExpiration;

//   if (dayOfYearExpiration < 0) {
//     return { year: year - 1, dayOfYear: 360 - dayOfYearExpiration };
//   }

//   return { year: year, dayOfYear: dayOfYearExpiration };
// };
