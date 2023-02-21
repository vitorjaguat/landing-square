import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TbWaveSquare } from 'react-icons/tb';

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

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#360606] grid gap-4 grid-cols-5 grid-rows-5'>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
          className='bg-red-900 hover:bg-red-800 flex items-center justify-center cursor-pointer'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
          }}
          onClick={() => router.push('/challenges')}
        >
          challenges
        </motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
          }}
          animate={{ x: 0, y: 0 }}
          transition={{ stiffness: 500, type: 'spring' }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
          className='bg-red-900 hover:bg-red-800 flex items-center justify-center cursor-pointer'
          //   exit={{
          //     x: Math.random() * 1200 - 600,
          //     y: Math.random() * 1200 - 600,
          //     opacity: 0,
          //   }}
          exit={{
            backgroundColor: 'transparent',
            scale: 1.3,
            transition: { duration: 1 },
          }}
          onClick={() => router.push('/us')}
        >
          <TbWaveSquare size={40} />
        </motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
          className='bg-red-900 hover:bg-red-800 flex items-center justify-center cursor-pointer'
          exit={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
          }}
          onClick={() => router.push('/about')}
        >
          aims
        </motion.div>
        <motion.div
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
          }}
          animate={{ x: 0, y: 0 }}
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
