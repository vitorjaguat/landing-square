import { useRouter } from 'next/router';
import Link from 'next/link';
import { TbWaveSquare } from 'react-icons/tb';

export default function Team() {
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
          <Link href='/aims'>
            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-xs md:text-sm cursor-pointer'>
              aims
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
            Meet the talented team at Square Wave, a design start-up that's
            transforming the way we experience digital media.
          </p>
          <h2 className='pb-4 md:pb-10 text-2xl'>CEO</h2>
          <p className='pb-10'>
            At the helm is our CEO, Jason Kim. Jason is a self-taught
            entrepreneur who's been in the tech industry for over a decade. He's
            a creative problem-solver with a passion for design and user
            experience. Under his leadership, Square Wave has quickly become a
            leading player in the digital design space.
          </p>
          <h2 className='pb-4 md:pb-10 text-2xl'>Product Management</h2>
          <p className='pb-10'>
            Leading our product team is Jane Lee, an experienced product manager
            with a degree in business from Stanford University. Jane has been
            with Square Wave for three years and has a proven track record of
            delivering innovative and successful products. She's a strategic
            thinker who's always looking for ways to improve our products and
            enhance the user experience.
          </p>
          <h2 className='pb-4 md:pb-10 text-2xl'>Design</h2>
          <p className='pb-4'>
            Our design team is led by two talented individuals:
          </p>
          <p className='pb-6'>
            First, there's Alex Nguyen. Alex is a self-taught graphic designer
            with a keen eye for detail. He's been with Square Wave for two years
            and has quickly become an integral part of the team. Alex is a
            master of creating immersive and engaging designs, and his work has
            helped to elevate our clients' brands to new heights.
          </p>
          <p className='pb-10'>
            Next up is Maria Perez. Maria has a degree in visual communication
            from the Art Institute of Chicago and has been with Square Wave for
            one year. She's a talented designer with a passion for typography
            and branding. Maria's designs are visually striking and have helped
            our clients to stand out in a crowded marketplace.
          </p>
          <h2 className='pb-4 md:pb-10 text-2xl'>Architecture</h2>
          <p className='pb-4'>
            Our architecture team is led by two experienced individuals:
          </p>
          <p className='pb-4'>
            First, there's Michael Johnson. Michael has a degree in architecture
            from the University of California, Berkeley and has been with Square
            Wave for four years. He's a master of creating efficient and
            scalable digital spaces. Michael's designs are informed by his deep
            understanding of architecture and his ability to translate
            real-world spaces into digital environments.
          </p>
          <p className='pb-10'>
            And last but not least, there's Fatima Ahmed. Fatima is from Egypt
            and has a degree in architectural engineering from the American
            University in Cairo. She's been with Square Wave for three years and
            is a master of creating immersive and believable digital
            environments. Fatima's designs are informed by her deep
            understanding of architecture and her ability to create digital
            spaces that feel like real places.
          </p>
          <h2 className='pb-4 md:pb-10 text-2xl'>Web Development</h2>
          <p className='pb-4'>
            Our web development team is led by two talented individuals:
          </p>
          <p className='pb-4'>
            First, there's David Patel. David is a self-taught developer with a
            passion for creating user-friendly web applications. He's been with
            Square Wave for one year and has quickly become an integral part of
            the team. David's work has helped to streamline our clients' digital
            experiences and has made their websites more efficient and
            effective.
          </p>
          <p className='pb-10'>
            And last but not least, there's Sarah Kim. Sarah has a degree in
            computer science from the University of Texas at Austin and has been
            with Square Wave for two years. She's a master of creating
            responsive and visually appealing web applications. Sarah's work has
            helped our clients to attract and retain customers by providing a
            seamless digital experience.
          </p>
          <p>
            Together, this talented team is pushing the boundaries of what's
            possible in the digital design space. They're dedicated to creating
            products that are both innovative and intuitive, and they're excited
            to continue to shape the future of design and technology.
          </p>
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
