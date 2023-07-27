import { YYYYDOY, expiredDate, checkFileIsExpired } from "./helpers/index;
import config from "../config.json" assert { type: "json" };

import { MetaData } from "./Types/FIleMeta.ts";

// year, day of year

async function fileCheckIfFileIsExpired(currentDate: Date, fileMeta: MetaData):Promise<void> {
  const expirationDate = await expiredDate(
    currentDate,
    config.days_till_expiration
  );
  const fileMetaModified = await YYYYDOY(new Date(fileMeta.mtime));

  const hasFileExpired = checkFileIsExpired(expirationDate, fileMetaModified);

  if (hasFileExpired) {
    console.log("File has expired and needs to be update");
  }
}

(async function main():Promise<void> {
  const filePath = "../sample/acorn.js";
  const currentDate = new Date();
  const fileInfo = await Deno.stat(filePath);
  const fileIsExpired = fileCheckIfFileIsExpired(currentDate,fileInfo)
})();
