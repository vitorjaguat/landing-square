import { useRouter } from 'next/router';
import Link from 'next/link';
import { TbWaveSquare } from 'react-icons/tb';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react';

export default function Contact() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/contact');
    setShowModal(true);
  };

  console.log(showModal);

  return (
    <>
      <div className='h-screen w-screen grid grid-rows-7 md:grid-cols-7'>
        {showModal && (
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px] h-[300px] bg-red-700 flex flex-col justify-center items-center text-sm'>
            <div></div>
            your message has been sent!
            <button
              onClick={() => setShowModal(false)}
              className='rounded-none mt-10 px-8 py-2'
            >
              ok
            </button>
          </div>
        )}
        <div className='flex justify-center h-full md:h-screen row-span-2 md:col-span-2'>
          <div className='w-screen md:h-screen md:w-full flex md:flex-col gap-4 justify-around md:items-center md:gap-16 py-[15%] md:fixed'>
            <Link href='/us'>
              <div className='w-[100px] h-[100px] bg-red-900 hover:bg-red-800  flex items-center justify-center text-sm cursor-pointer'>
                <TbWaveSquare size={30} />
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

        <div className='row-span-3 md:col-span-3 flex items-center justify-center z-10'>
          <div className='overflow-scroll bg-red-900 p-20 text-sm  md:text-md leading-relaxed'>
            <div className='flex justify-center mx-auto text-center pb-16'>
              <TbWaveSquare size={50} />
            </div>
            <h2 className='pb-12 md:pb-16 text-center text-3xl'>contact us</h2>
            <p className='pb-12 md:pb-16'>
              Feel free to fill the form and send us a message. You can also
              reach us through our social media profiles.
            </p>

            <form className='w-full'>
              <div className='w-full flex justify-between my-4'>
                <label htmlFor='name' className='p-2'>
                  name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='your name'
                  className='w-full ml-6 p-2 bg-slate-200 focus:outline-slate-400'
                />
              </div>
              <div className='w-full flex justify-between my-4'>
                <label className='p-2 whitespace-nowrap' htmlFor='email'>
                  e-mail
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='your email'
                  className='w-full ml-6 p-2 bg-slate-200 focus:outline-slate-400'
                />
              </div>
              <div className='w-full flex justify-between my-4'>
                <label className='p-2' htmlFor='subject'>
                  subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  placeholder='subject'
                  className='w-full ml-6 p-2 bg-slate-200 focus:outline-slate-400'
                />
              </div>
              <div className='w-full flex justify-between my-4'>
                <label className='p-2' htmlFor='name'>
                  message
                </label>
                <textarea
                  rows={10}
                  id='message'
                  name='message'
                  placeholder='your message'
                  className='w-full ml-6 p-2 bg-slate-200 focus:outline-slate-400'
                />
              </div>
              <div className='flex w-full justify-end'>
                <button
                  onClick={handleSubmit}
                  className='mt-6 py-2 px-10 rounded-none'
                >
                  submit
                </button>
              </div>
            </form>

            <div className='mt-[90px] flex justify-center gap-16'>
              <AiOutlineMail size={25} />
              <FaGithub size={25} />
              <FaLinkedinIn size={25} />
              <BsFillPersonLinesFill size={25} />
            </div>
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
    </>
  );
}
