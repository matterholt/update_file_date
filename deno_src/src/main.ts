import { walk } from "https://deno.land/std@0.194.0/fs/walk.ts";
import { dayOfYearUtc } from "https://deno.land/std@0.195.0/datetime/mod.ts";

const readMeta = async (file: string) => {
  const fileInfo = await Deno.stat(file);
  const modDate = new Date(fileInfo.mtime);
  // need to check for that year

  return { year: modDate.getFullYear(), day: dayOfYearUtc(modDate) };
};

const expiredDate = () => {
  const dayOfExpiration = 30;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  //   const dayOfYearExpiration = dayOfYearUtc(currentDate) - dayOfExpiration;
  const dayOfYearExpiration = 20 - dayOfExpiration;

  if (dayOfYearExpiration < 0) {
    return { year: currentYear - 1, day: 360 - dayOfYearExpiration };
  }

  return { year: currentYear, day: dayOfYearExpiration };
};

(async function main() {
  let filePath = "../sample/acorn.js";

  const expirationDate = await expiredDate();
  const fileLastModified = await readMeta(filePath);
  console.log({ expirationDate, fileLastModified });
  // TODO: write test,
  // TODO: when calculate take account year
})();
