import { useRouter } from 'next/router';
import Link from 'next/link';
import { TbWaveSquare } from 'react-icons/tb';

export default function About() {
  const router = useRouter();

  return (
    <div className='h-screen w-screen grid grid-rows-7 md:grid-cols-7'>
      <div className='flex justify-center h-full md:h-screen row-span-2 md:col-span-2'>
        <div className='w-screen md:h-screen md:w-full flex md:flex-col gap-4 justify-around md:items-center md:gap-16 py-[15%] md:fixed'>
          <Link href='/us'>
            <div className='w-[100px] h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-sm cursor-pointer'>
              <TbWaveSquare size={30} />
            </div>
          </Link>
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
          <Link href='/contact'>
            <div className='w-[100px] h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-sm cursor-pointer'>
              contact
            </div>
          </Link>
        </div>
      </div>

      <div className='row-span-3 md:col-span-3 flex items-center justify-center'>
        <div className='overflow-scroll bg-red-900 p-20 text-sm  md:text-md leading-relaxed'>
          <div className='flex justify-center mx-auto text-center pb-16'>
            <TbWaveSquare size={50} />
          </div>
          <h2 className='pb-12 md:pb-16 text-center text-3xl'>about us</h2>
          <p className='pb-4 md:pb-16'>
            Square Wave was founded four years ago by a group of designers and
            developers with a passion for creating beautiful and functional
            digital products.
          </p>
          <p className='pb-4'>
            Early on, we worked on a variety of projects for clients across
            different industries, from e-commerce websites to mobile apps.
          </p>
          <p className='pb-4'>
            One of our first major projects was a mobile app for a health and
            wellness startup, which became hugely popular and received
            widespread media coverage.
          </p>
          <p className='pb-4'>
            Another project we're particularly proud of is a website we designed
            for a local non-profit organization, which helped them raise
            awareness and attract more donations.
          </p>
          <p className='pb-4'>
            Over the years, we've continued to expand our portfolio and take on
            more ambitious projects.
          </p>
          <p className='pb-4'>
            We worked with a well-known fashion brand to design and develop an
            immersive online shopping experience that integrated seamlessly with
            their in-store operations.
          </p>
          <p className='pb-4'>
            We also designed and developed a custom CRM system for a real estate
            agency, streamlining their processes and increasing their
            efficiency.
          </p>
          <p className='pb-4'>
            One of our most recent projects was a mobile app for a startup in
            the travel industry, which featured a unique user interface and
            advanced search algorithms to help users find the perfect vacation
            destination.
          </p>
          <p className='pb-4'>
            Throughout our history, we've always prioritized user experience and
            design aesthetics, and our clients have consistently praised us for
            our attention to detail and commitment to quality.
          </p>
          <p className='pb-4'>
            As we look to the future, we're excited to continue pushing the
            boundaries of what's possible in design and technology, and to
            continue delivering outstanding products that help our clients
            succeed.
          </p>
          <p className='pb-4'>
            Our team is made up of talented designers, developers, and project
            managers who work together closely to ensure that every project is a
            success.
          </p>
          <p className='pb-4'>
            We believe that collaboration and transparency are key to achieving
            great results, and we're dedicated to building long-lasting
            relationships with our clients.
          </p>
          <p className='pb-4'>
            At Square Wave, we're more than just a design agency – we're a team
            of passionate professionals who are driven by a shared vision of
            creating products that have a positive impact on the world.
          </p>
          <p className='pb-4'>
            We're excited to see what the future holds, and we can't wait to
            continue making waves in the design industry.
          </p>
        </div>
      </div>

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
