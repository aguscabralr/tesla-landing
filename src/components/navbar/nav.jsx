'use client';
import { useEffect, useState } from 'react';
import { scrollTo } from '../../gsap/gsap';
import SideBar from '../../assets/utils/sideBar';
import Side from './side';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();
  const [first, setFirst] = useState(true);
  const [dark, setDark] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    if (pathname.length === 1) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight - 64) setFirst(false);
        else setFirst(true);
      });
    } else setFirst(false);

    const media = window.matchMedia('(prefers-color-scheme: dark)');

    media.addListener(() => {
      setDark(media.matches);
    });
  }, [pathname]);

  return (
    <nav id='nav' className={`w-full h-16 justify-between items-center fixed backdrop-blur-lg bg-white/80 dark:bg-black/80 text-black dark:text-white top-0 z-50`}>
      <Side sideBar={sideBar} setSideBar={setSideBar} />
      <section onClick={() => setSideBar(false)} className={`w-1/2 h-full absolute top-0 ${sideBar ? 'left-0' : 'left-[-50%]'}`}></section>

      {pathname.length === 1 ? (
        <>
          <section className={`w-full h-full px-10 flex items-center landscape:hidden shadow-2xl duration-500`}>
            <button onClick={() => scrollTo('first')} className='h-[60%]'>
              <img src='/svgs/teslaR.svg' alt='Tesla' className='h-full aspect-square hover:scale-125 duration-300' />
            </button>
            <button onClick={() => setSideBar(!sideBar)} className='absolute right-10 duration-1000'>
              <SideBar sideBar={sideBar} color={!dark ? '#000000' : '#ffffff'} />
            </button>
          </section>
          <section className={`w-full h-full hidden landscape:flex justify-evenly items-center ${!first ? 'px-0' : 'pr-[50vw]'} shadow-2xl duration-500`}>
            <button onClick={() => scrollTo('first')} className='h-[60%]'>
              <img src='/svgs/teslaR.svg' alt='Tesla' className='h-full aspect-square hover:scale-125 duration-300' />
            </button>
            <button onClick={() => scrollTo('first')} className={`w-fit px-5 py-1 justify-center items-center hover:bg-rd hover:text-white hover:rounded-2xl duration-300`}>
              Home
            </button>
            <button onClick={() => scrollTo('second')} className={`w-fit px-5 py-1 justify-center items-center hover:bg-rd hover:text-white hover:rounded-2xl duration-300`}>
              Vehicles
            </button>
            <button onClick={() => scrollTo('third')} className={`w-fit px-5 py-1 justify-center items-center hover:bg-rd hover:text-white hover:rounded-2xl duration-300`}>
              Compare
            </button>
          </section>
        </>
      ) : (
        <section className={`${!first ? 'w-full shadow-2xl' : 'w-1/2'} h-full flex justify-evenly items-center duration-500`}>
          <a href='/' className='h-[60%]'>
            <img src='/svgs/teslaR.svg' alt='Tesla' className='h-full aspect-square hover:scale-125 duration-300' />
          </a>
        </section>
      )}
    </nav>
  );
};

export default NavBar;
