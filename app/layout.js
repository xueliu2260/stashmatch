import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata = {
  title: 'StashMatch',
  description: 'A Next.js and Tailwind app for matching yarn stash to project ideas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} bg-slate-950 text-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
