import db from './db';

export interface Training {
  id: number;
  title: string;
  image: string;
  description: string;
}

export async function getTrainings() {
  const result = db.prepare('SELECT * FROM trainings').all();
  return result as Training[];
}
