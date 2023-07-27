import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { YYYYDOY, expiredDate, checkFileIsExpired } from "./modifyDates.ts";

const fileMeta = {
  isFile: true,
  isDirectory: false,
  isSymlink: false,
  size: 218042,
  mtime: "2023-07-26T03:09:08.779Z",
  atime: "2023-07-26T03:09:08.779Z",
  birthtime: "2023-07-26T03:09:08.779Z",
  dev: 64769,
  ino: 5032770,
  mode: 33204,
  nlink: 1,
  uid: 1000,
  gid: 1000,
  rdev: 0,
  blksize: 4096,
  blocks: 432,
  isBlockDevice: false,
  isCharDevice: false,
  isFifo: false,
  isSocket: false,
};

// Simple name and function, compact form, but not configurable
Deno.test("gets the year and day of year", () => {
  const date1 = YYYYDOY(new Date("2023-07-27T00:35:57.876Z"));
  const dateBeginning = YYYYDOY(new Date("2023-01-02T00:35:57.876Z"));
  const dateEnding = YYYYDOY(new Date("2023-12-25T00:35:57.876Z"));

  assertEquals(date1, { year: 2023, dayOfYear: 208 });
  assertEquals(dateBeginning, { year: 2023, dayOfYear: 2 });
  assertEquals(dateEnding, { year: 2023, dayOfYear: 359 });
});

Deno.test("calculate the age of expiration day of year", () => {
  const date1 = expiredDate(new Date("2023-07-27T00:35:57.876Z"), 30);
  const dateBeginning = expiredDate(new Date("2023-01-02T00:35:57.876Z"), 30);
  const dateEnding = expiredDate(new Date("2023-12-25T00:35:57.876Z"), 30);

  assertEquals(date1, { year: 2023, dayOfYear: 178 });
  assertEquals(dateBeginning, { year: 2022, dayOfYear: 388 });
  assertEquals(dateEnding, { year: 2023, dayOfYear: 329 });
});

// {
//   expirationDate: { year: 2023, dayOfYear: 178 },
//   fileMetaModified: { year: 2023, dayOfYear: 207 }
// }
Deno.test("determines if files has expired", () => {
  const check1 = checkFileIsExpired(
    { year: 2023, dayOfYear: 207 },
    { year: 2023, dayOfYear: 178 }
  );
  const check2 = checkFileIsExpired(
    { year: 2023, dayOfYear: 107 },
    { year: 2023, dayOfYear: 178 }
  );
  const check3 = checkFileIsExpired(
    { year: 2023, dayOfYear: 107 },
    { year: 2022, dayOfYear: 360 }
  );
  const check4 = checkFileIsExpired(
    { year: 2022, dayOfYear: 107 },
    { year: 2023, dayOfYear: 360 }
  );

  assertEquals(check1, false);
  assertEquals(check2, true);
  assertEquals(check3, false);
  assertEquals(check4, true);
});
