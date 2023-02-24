import { useRouter } from 'next/router';
import Link from 'next/link';
import { TbWaveSquare } from 'react-icons/tb';

export default function Aims() {
  const router = useRouter();

  return (
    <div className='h-screen w-screen grid grid-rows-7 md:grid-cols-7'>
      <div className='flex justify-center h-full md:h-screen row-span-2 md:col-span-2 md:order-3'>
        <div className='w-screen md:h-screen md:w-full flex md:flex-col gap-4 justify-around md:items-center md:gap-16 py-[15%] md:fixed'>
          <Link href='/us'>
            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-sm cursor-pointer'>
              <TbWaveSquare size={30} />
            </div>
          </Link>
          <Link href='/team'>
            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-xs md:text-sm cursor-pointer'>
              team
            </div>
          </Link>
          <Link href='/about'>
            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-xs md:text-sm cursor-pointer'>
              about
            </div>
          </Link>
          <Link href='/contact'>
            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-xs md:text-sm cursor-pointer'>
              contact
            </div>
          </Link>
        </div>
      </div>

      <div className='row-span-3 md:col-span-3 flex items-center justify-center md:order-2'>
        <div className='overflow-scroll bg-red-900 p-10 md:p-20 text-sm  md:text-md leading-relaxed'>
          <div className='flex justify-center mx-auto text-center pb-16'>
            <TbWaveSquare size={50} />
          </div>
          <h2 className='pb-12 md:pb-16 text-center text-3xl'>square wave</h2>
          <p className='pb-12 md:pb-16'>
            At Square Wave, we believe in the power of design to transform the
            world.
          </p>
          <p className='pb-4'>
            We believe that every interaction with digital media should be
            intuitive, engaging, and meaningful.
          </p>
          <p className='pb-4'>
            We're passionate about creating products that delight and inspire
            our clients and their customers.
          </p>
          <p className='pb-4'>
            We believe in the importance of collaboration and transparency, both
            within our team and with our clients.
          </p>
          <p className='pb-4'>
            We're committed to staying at the forefront of design and
            technology, always pushing the boundaries of what's possible.
          </p>
          <p className='pb-4'>
            We believe in creating products that are not only aesthetically
            beautiful but also functionally effective.
          </p>
          <p className='pb-4'>
            We're dedicated to creating a work environment that's inclusive,
            supportive, and empowering.
          </p>
          <p className='pb-4'>
            We believe that design has the power to drive positive social change
            and create a better world for all.
          </p>
          <p className='pb-12'>
            We're passionate about our work, and we're excited to continue to
            shape the future of design and technology.
          </p>
          <p className='pb-4'>
            Join us on this journey, and let's create something amazing
            together.
          </p>
        </div>
      </div>

      <div className='flex justify-center h-full md:h-screen row-span-2 md:col-span-2 md:relative md:order-1'>
        <div className='w-screen md:h-screen md:w-full flex md:flex-col justify-center md:justify-around md:items-center md:gap-16 py-[15%] md:fixed'>
          <Link href=''>
            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] hidden md:flex items-center justify-center text-sm md:invisible'></div>
          </Link>
          <Link href=''>
            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] hidden md:flex items-center justify-center text-sm md:invisible'></div>
          </Link>
          <Link href=''>
            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] items-center justify-center text-sm hidden md:flex md:invisible'></div>
          </Link>
          <div onClick={() => router.back()}>
            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-xs md:text-sm cursor-pointer'>
              back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
