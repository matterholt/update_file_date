import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { YYYYDOY } from "./modifyDates.ts";

// Simple name and function, compact form, but not configurable
Deno.test("gets the year and day of year", () => {
  const date1 = YYYYDOY(new Date("2023-07-27T00:35:57.876Z"));
  const dateBeginning = YYYYDOY(new Date("2023-01-02T00:35:57.876Z"));
  const dateEnding = YYYYDOY(new Date("2023-12-25T00:35:57.876Z"));

  assertEquals(date1, { year: 2023, dayOfYear: 208 });
  assertEquals(dateBeginning, { year: 2023, dayOfYear: 2 });
  assertEquals(dateEnding, { year: 2023, dayOfYear: 359 });
});
