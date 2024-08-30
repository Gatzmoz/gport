import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Navbar from '@/components/Navbar';
import NavbarDemo from '@/components/example/navbar-menu-demo';
import { ThemeProvider } from '@/components/theme-prodiver';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GPort',
  description: 'Portofolio of Gatzmoz',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MaxWidthWrapper>
            <Navbar />
            {children}
            <Footer />
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
