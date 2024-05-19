import type { Metadata } from 'next';
import './globals.css';
import { UIProvider } from '@/context/ui/UIProvider';
import { Header } from '@/components/ui/Header';

export const metadata: Metadata = {
  title: 'Tesla clone',
  description: 'A clone of Tesla landing page, just for academical purposes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UIProvider>
      <html lang="en" className="snap-y snap-mandatory">
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </UIProvider>
  );
}