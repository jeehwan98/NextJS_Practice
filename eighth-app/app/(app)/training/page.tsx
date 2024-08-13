import { verifyAuth } from '@/lib/auth';
import { getTrainings } from '@/lib/training';
import { getAllUsers } from '@/lib/userInfo';
import { redirect } from 'next/navigation';

interface Training {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default async function TrainingPage() {
  const result = await verifyAuth(); // has a user key and a session key

  if (!result.user) {
    return redirect('/');
  }

  const trainingSessions = await getTrainings();

  return (
    <main>
      <h1>Find your favorite activity</h1>
      <ul id="training-sessions">
        {trainingSessions.map((training) => (
          <li key={training.id}>
            <img src={`/trainings/${training.image}`} alt={training.title} />
            <div>
              <h2>{training.title}</h2>
              <p>{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
