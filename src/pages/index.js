import Head from 'next/head';
import Box from '@/components/Box';
import { Arvo } from '@next/font/google';

const inter = Arvo({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Square</title>
        <meta name='description' content='Landing page based on squares' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <Box />
      </main>
    </>
  );
}
