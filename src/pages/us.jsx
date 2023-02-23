import Link from 'next/link';
import { useRouter } from 'next/router';
import { TbWaveSquare, TbChartBubble } from 'react-icons/tb';

export default function us() {
  const router = useRouter();

  return (
    <div className='h-screen w-screen grid grid-rows-7 md:grid-cols-7'>
      <div className='flex justify-center h-full md:h-screen row-span-2 md:col-span-2'>
        <div className='w-screen md:h-screen md:w-full flex md:flex-col gap-4 justify-around md:items-center md:gap-16 py-[15%] md:fixed'>
          <Link href='/aims'>
            <div className='w-[100px] h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-sm cursor-pointer'>
              aims
            </div>
          </Link>
          <Link href='/team'>
            <div className='w-[100px] h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-sm cursor-pointer'>
              team
            </div>
          </Link>
          <Link href='/about'>
            <div className='w-[100px] h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-sm cursor-pointer'>
              about
            </div>
          </Link>
          <Link href='/contact'>
            <div className='w-[100px] h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-sm cursor-pointer'>
              contact
            </div>
          </Link>
        </div>
      </div>

      {/* h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-[300px] sm:w-[400px] md:w-[500px] md:min-w-[500px] lg:w-[600px] lg:min-w-[600px] */}

      <div className='row-span-3 md:col-span-3 flex items-center justify-center'>
        <div className='overflow-scroll bg-red-900 p-20 text-sm  md:text-md leading-relaxed'>
          <div className='flex justify-center mx-auto text-center pb-16'>
            <TbWaveSquare size={50} />
          </div>
          <h2 className='pb-12 md:pb-16 text-center text-3xl'>square wave</h2>
          <p className='pb-12 md:pb-16'>
            Welcome to our start-up, a company that specializes in creating
            smart solutions for architecture and design. Our team is dedicated
            to bringing innovative and cutting-edge technology to the industry
            to make the process of designing and building structures more
            efficient, effective, and sustainable.
          </p>

          <h2 className='pb-4 text-2xl'>
            The Square Shape in Design and Architecture
          </h2>
          <ul className='pb-12 md:pb-16'>
            <li>
              At the heart of our designs is the use of geometry, specifically
              the square shape. The square shape has a long history in the world
              of design and architecture, dating back to ancient times.
            </li>
            <li>
              The Egyptians and Greeks used the square shape in their designs to
              create stable, durable, and aesthetically pleasing structures. In
              modern times, the square shape continues to be a popular choice
              for architects and designers due to its versatility, simplicity,
              and timeless appeal.
            </li>
          </ul>

          <h2 className='pb-4 text-2xl'>Our Approach to Design</h2>
          <ul>
            <li>
              Our start-up takes inspiration from the history and versatility of
              the square shape to create innovative and sustainable designs.
            </li>
            <li>
              We use technology to bring our designs to life, incorporating 3D
              visualization tools, energy-efficient design tools, project
              management tools, and smart building technology.
            </li>
            <li>
              Our focus on the square shape ensures that our designs are not
              only visually appealing but also functional and practical.
            </li>
          </ul>
        </div>
      </div>

      {/* <div className='flex justify-center h-full md:h-screen row-span-2 md:col-span-2'>
        <Link
          href='/'
          className='fixed flex flex-col items-center w-[100px] h-[100px]'
        >
          <div className='w-[100px] h-[100px] bg-red-900 hover:bg-red-800  flex flex-col items-center justify-center'>
            <div className='text-sm'>back</div>
          </div>
        </Link>
      </div> */}

      <div className='flex justify-center h-full md:h-screen row-span-2 md:col-span-2'>
        <div className='w-screen md:h-screen md:w-full flex md:flex-col gap-4 justify-around md:items-center md:gap-16 py-[15%] md:fixed'>
          <Link href=''>
            <div className='w-[100px] h-[100px] items-center justify-center text-sm invisible'></div>
          </Link>
          <Link href=''>
            <div className='w-[100px] h-[100px] flex items-center justify-center text-sm invisible'></div>
          </Link>
          <Link href=''>
            <div className='w-[100px] h-[100px] flex items-center justify-center text-sm invisible'></div>
          </Link>
          <div onClick={() => router.back()}>
            <div className='w-[100px] h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-sm cursor-pointer'>
              back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
