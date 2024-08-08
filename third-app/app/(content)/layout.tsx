import { ReactNode } from 'react';
import '../global.css';
import MainHeader from '@/component/main-header/main-header';

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
        <body>
          <div id='page'>
            <MainHeader />
            {children}
          </div>
        </body>
      </html>
    </>
  )
}
