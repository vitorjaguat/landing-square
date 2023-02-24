import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TbWaveSquare, TbChartBubble } from 'react-icons/tb';
import { MdOutlineFingerprint } from 'react-icons/md';

export default function Box() {
  const router = useRouter();

  const boxVariants = {
    hidden: {
      y: Math.random() * 800 - 400,
      x: Math.random() * 800 - 400,
    },
    visible: {
      y: 0,
      x: 0,
    },
  };

  const mp = () => {
    return Math.random() * 90;
  };

  const mn = () => {
    return -(Math.random() * 90);
  };

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#360606] grid gap-4 grid-cols-5 grid-rows-5'>
        <motion.div
          whileTap={{ rotate: 360 }}
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mn(),
          }}
          animate={{ x: 0, y: 0, rotate: [mp(), mn(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 10,
            // rotate: { delay: 0.6 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.4 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mn(), mp(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mn(), mp(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>

        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mn(),
          }}
          animate={{ x: 0, y: 0, rotate: [mp(), mn(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 10,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
          }}
          onClick={() => router.push('/about')}
          className='bg-red-900 hover:bg-red-800 flex items-center justify-center cursor-pointer'
        >
          about
        </motion.div>

        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mn(), mp(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mp(), mn(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mp(), mn(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800 flex items-center justify-center cursor-pointer'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
          }}
          onClick={() => router.push('/aims')}
        >
          aims
        </motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mn(), mp(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mn(), mp(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mp(), mn(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mn(),
          }}
          animate={{ x: 0, y: 0, rotate: [mn(), mp(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mn(), mp(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mn(),
          }}
          animate={{ x: 0, y: 0, rotate: [mp(), mn(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800 flex items-center justify-center cursor-pointer'
          //   exit={{
          //     x: Math.random() * 1200 - 600,
          //     y: Math.random() * 1200 - 600,
          //     opacity: 0,
          //   }}
          exit={{
            backgroundColor: 'transparent',
            scale: 1.3,
            transition: {
              duration: 0.5,
              delay: 0.1,
              rotate: { delay: 0.1, duration: 0.5 },
            },
          }}
          onClick={() => router.push('/us')}
        >
          <TbWaveSquare size={38} />
          {/* <MdOutlineFingerprint size={35} /> */}
        </motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mp(), mn(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mn(),
          }}
          animate={{ x: 0, y: 0, rotate: [mp(), mn(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mp(), mn(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800 flex items-center justify-center cursor-pointer'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
          }}
          onClick={() => router.push('/team')}
        >
          team
        </motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mn(),
          }}
          animate={{ x: 0, y: 0, rotate: [mn(), mp(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mn(),
          }}
          animate={{ x: 0, y: 0, rotate: [mp(), mn(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mn(), mp(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mn(), mp(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mn(),
          }}
          animate={{ x: 0, y: 0, rotate: [mn(), mp(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mn(),
          }}
          animate={{ x: 0, y: 0, rotate: [mp(), mn(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mp(),
          }}
          animate={{ x: 0, y: 0, rotate: [mn(), mp(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mn(),
          }}
          animate={{ x: 0, y: 0, rotate: [mp(), mn(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        ></motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: mn(),
          }}
          animate={{ x: 0, y: 0, rotate: [mp(), mn(), 0] }}
          transition={{
            type: 'spring',
            duration: 4,
            damping: 7,
            bounce: 20,
            rotate: { delay: 0.6, duration: 2 },
            x: { type: 'spring', duration: 1 },
            y: { type: 'spring', duration: 1 },
          }}
          className='bg-red-900 hover:bg-red-800 flex items-center justify-center cursor-pointer'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
            transition: { duration: 0.3 },
          }}
          onClick={() => router.push('/contact')}
        >
          contact
        </motion.div>
      </div>
    </div>
  );
}
