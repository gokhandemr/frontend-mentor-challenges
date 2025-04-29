import type { Metadata } from 'next';
import { Roboto, Roboto_Mono, Roboto_Slab } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/sidebar';
import { Header } from '@/components/header';
import MarkdownEditor from '@/components/markdown-editor';

export const metadata: Metadata = {
  title: 'Markdown Editor',
  description: 'Markdown Editor. Dolor sint sunt quis duis.',
};

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

const robotoSlab = Roboto_Slab({
  variable: '--font-roboto-slab',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} ${robotoSlab.variable} ${robotoMono.variable}`}>
        <Sidebar />
        <div className='flex flex-wrap w-full content-start overflow-hidden'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
