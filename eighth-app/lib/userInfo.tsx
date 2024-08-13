import db from "./db";

export async function createUser(email: string, hashedPassword: string) {
  const password = hashedPassword;

  const stmt = db.prepare(
    `INSERT INTO users (email, password)
    VALUES (?, ?)
  `);

  const result = stmt.run(email, password);
  return result.lastInsertRowid;
}

export async function getAllUsers() {
  const stmt = db.prepare('SELECT * FROM users');
  return stmt.all();
}

type User = {
  id: string;
  email: string;
  password: string;
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const result = db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);
  return result as User | undefined;
}
