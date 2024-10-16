import { assertEquals } from "@std/assert";
import { expect } from "jsr:@std/expect";
import { add } from "./main.ts";

Deno.test("Simpel test", () => {
  const result = add(9, 2);
  expect(result).toEqual(11);

  assertEquals(add(6, 5), 8);
});
