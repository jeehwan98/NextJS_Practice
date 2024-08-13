import { ReactNode } from 'react';
import '../globals.css';
import { logout } from '@/actions/auth-actions';

export const metadata = {
  title: 'Next Auth',
  description: 'Next.js Authentication',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function AuthRootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <header id='auth-header'>
        <p>Welcome back!</p>
        <form action={logout}>
          <button>Logout</button>
        </form>
      </header>
      {children}
    </>
  );
}