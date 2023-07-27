import { walk } from "https://deno.land/std@0.194.0/fs/walk.ts";
import { dayOfYearUtc } from "https://deno.land/std@0.195.0/datetime/mod.ts";

// year, day of year

(async function main() {
  let filePath = "../sample/acorn.js";

  // const expirationDate = await expiredDate();
  // const fileLastModified = await readMeta(filePath);

  // console.log({ expirationDate, fileLastModified });

  // if
  // if (
  //   fileLastModified.year > expirationDate.year &&
  //   fileLastModified.dayOfYear < expirationDate.dayOfYear
  // ) {
  //   console.log(
  //     "file has been modified before the new year so , previous year"
  //   );
  // }

  // TODO: write test,
  // TODO: when calculate take account year
})();
