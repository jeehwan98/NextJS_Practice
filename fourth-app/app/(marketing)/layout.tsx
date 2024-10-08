import { ReactNode } from 'react';
import '../global.css';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  )
}
