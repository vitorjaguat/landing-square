import Head from 'next/head';
import Image from 'next/image';
import Box from '@/components/Box';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Square</title>
        <meta name='description' content='Landing page based on squares' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box />
    </>
  );
}
