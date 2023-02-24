import Link from 'next/link';
import { useRouter } from 'next/router';
import { TbWaveSquare } from 'react-icons/tb';

export default function Us() {
  const router = useRouter();

  return (
    <div className='h-screen w-screen grid md:grid-row-reverse grid-rows-7 md:grid-cols-7'>
      <div className='flex  justify-center h-full md:h-screen row-span-2 md:col-span-2 md:order-3'>
        <div className='w-screen md:h-screen md:w-full flex md:flex-col gap-4 justify-around md:items-center md:gap-16 py-[15%] md:fixed'>
          <Link href='/aims'>
            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-xs md:text-sm cursor-pointer'>
              aims
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
            <li className='pb-16'>
              Our focus on the square shape ensures that our designs are not
              only visually appealing but also functional and practical.
            </li>
            <li>
              In conclusion, our start-up aims to bring smart solutions to the
              architecture and design industry by incorporating innovative
              technology and a focus on the versatile and timeless square shape.
              Through our approach to design, we strive to create sustainable
              and practical structures that meet the needs of our clients.
            </li>
          </ul>
        </div>
      </div>

      <div className='flex justify-center h-full md:h-screen row-span-2 md:col-span-2 md:order-1 md:relative'>
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
