import Header from '@/components/header';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'NextPosts',
  description: 'Browse and share amazing posts.',
};

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
