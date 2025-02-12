import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import localFont from 'next/font/local';
// import { Nabla } from 'next/font/google';

import { ThemeToggle } from '@/components/ui';

import '@/styles/main.css';

//* LEFT IN AS EXAMPLE OF HOW TO USE GOOGLE FONTS
// const nabla = Nabla({
//   subsets: ['latin'],
//   variable: '--font-nabla',
//   weight: '400',
// });

//* INCLUDE THIS IN <body>
// ${nabla.variable}

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// !CHANGETHIS
export const metadata: Metadata = {
  title: 'Tailwind 4 Playground',
  description: 'Tailwind 4 playground',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="relative">
            <div className="absolute top-3 right-3">
              <ThemeToggle />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
