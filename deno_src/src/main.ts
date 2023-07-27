import { YYYYDOY, expiredDate, checkFileIsExpired } from "./helpers/index.ts";
import config from "../config.json" assert { type: "json" };

// year, day of year

(async function main() {
  let filePath = "../sample/acorn.js";
  const currentDate = new Date();

  const expirationDate = await expiredDate(
    currentDate,
    config.days_till_expiration
  );
  const fileInfo = await Deno.stat(filePath);
  const fileMetaModified = await YYYYDOY(new Date(fileInfo.mtime));

  const hasFileExpired = checkFileIsExpired(expirationDate, fileMetaModified);

  if (hasFileExpired) {
    console.log("File has expired and needs to be update");
  }

  // TODO: write test,
  // TODO: when calculate take account year
})();
