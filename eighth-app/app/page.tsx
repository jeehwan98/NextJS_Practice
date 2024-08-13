import AuthForm from '@/components/auth-form';

type PageProps = {
  searchParams?: {
    mode?: string;
  }
}

export default async function Home({ searchParams }: PageProps) {
  const formMode = searchParams?.mode || 'login';
  return <AuthForm mode={formMode} />;
}