import { test } from "node:test";
import assert from "node:assert/strict";
import pg from "pg";

test("writes and reads a row in PostgreSQL", async () => {
  const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();

  try {
    await client.query(
      "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT NOT NULL)"
    );

    const inserted = await client.query("INSERT INTO users (name) VALUES ($1) RETURNING id", [
      "Alice",
    ]);
    const id = inserted.rows[0].id;

    const result = await client.query("SELECT name FROM users WHERE id = $1", [id]);

    assert.strictEqual(result.rows.length, 1);
    assert.strictEqual(result.rows[0].name, "Alice");
  } finally {
    await client.end();
  }
});
