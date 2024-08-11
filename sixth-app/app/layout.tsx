import Header from '@/components/header';
import './globals.css';
import React, { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js Caching',
  description: 'Learn how Next.js caching works',
};

interface RootLayoutProps {
  children: ReactNode;
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