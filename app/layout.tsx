
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar, Footer, Cart } from '@/components/Index';
import QueryProvider from '../providers/query-provider';
import { ShoppingCartProvider } from '@/providers/shoppingCart-provider';
import { ChakraProvider } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`relative ${inter.className} flex min-h-screen flex-col bg-white `}
      >
        <ShoppingCartProvider>
          <QueryProvider>
            <ChakraProvider>
            
        <div className="bg-yellow-500 text-black text-center p-2 font-bold text-sm">
          🚧 This site is currently under development. 🚧
        
        </div>
              <Navbar />
              <div className="flex-grow">{children}</div>
              <Footer />
            </ChakraProvider>
          </QueryProvider>
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
