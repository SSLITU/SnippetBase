// addSnippet.ts
import type { RowDataPacket } from "mysql2";
import pool from "./db";

export interface Snippet {
  id: string;
  content: string;
  type: string;
}

export async function addSnippet(snippet: Snippet): Promise<void> {
  const { id, content, type } = snippet;
  await pool.query(
    "INSERT INTO snippets (id, content, type) VALUES (?, ?, ?)",
    [id, content, type]
  );
}

// getSnippets.ts
export async function getSnippets(): Promise<Snippet[]> {
  const [snippets] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM snippets"
  );
  return snippets as Snippet[];
}

// deleteSnippet.ts
export async function deleteSnippet(id: string): Promise<void> {
  await pool.query("DELETE FROM snippets WHERE id = ?", [id]);
}

// updateSnippet.ts
