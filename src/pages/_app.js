import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { Arvo } from '@next/font/google';

const arvo = Arvo({
  subsets: ['latin'],
  weight: '400',
  variable: '--arvo-font',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <main className={`${arvo.variable} font-arvo`}>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </main>
  );
}
