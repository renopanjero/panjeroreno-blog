import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const CyberpunkWaifus = localFont({
  src: '/font/CyberpunkWaifus.ttf',
  weight: '400, 700, 800',
  style: 'normal',
  variable: '--font-cyberpunk-waifus',
});

export const metadata: Metadata = {
  title: 'RenoPanjero',
  description: 'I want to share my story and my experience with others',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${CyberpunkWaifus.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
