import { test } from "node:test";
import assert from "node:assert/strict";
import { add } from "./function.ts";

test("adds two positive numbers", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("adds zero", () => {
  assert.strictEqual(add(0, 7), 8);
});

test("adds negative numbers", () => {
  assert.strictEqual(add(-1, -2), -3);
});
