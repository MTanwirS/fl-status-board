import { ReactNode } from 'react';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Flight Status App</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}