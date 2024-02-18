'use client';
import { useEffect, useState } from 'react';
import { scrollTo } from '../../gsap/gsap';
import SideBar from '../../assets/utils/sideBar';
import Side from './side';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();
  const [topNav, setTopNav] = useState(true);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    if (pathname.length === 1) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight - 64) setTopNav(false);
        else setTopNav(true);
      });
    } else setTopNav(false);
  }, [pathname]);

  return (
    <nav className={`w-full h-16 flex-between fixed top-0 z-50 ${!topNav && 'shadow-2xl'} duration-200`}>
      <Side sideBar={sideBar} topNav={topNav} />
      <section onClick={() => setSideBar(false)} className={`w-1/2 h-[100svh] absolute top-0 ${sideBar ? 'left-0' : 'left-[-50%]'}`}></section>
      {pathname.length === 1 ? (
        <section className={`w-full h-full backdrop-blur-md flex-center lg:hidden ${!topNav ? 'text-black' : 'text-white'} duration-500`}>
          <button onClick={() => scrollTo('first')} className='h-[60%]'>
            <img src='/svgs/teslaR.svg' alt='Tesla' className='h-full aspect-square hover:scale-125 duration-300' />
          </button>
          <button onClick={() => setSideBar(!sideBar)} className='absolute right-5 duration-1000'>
            <SideBar sideBar={sideBar} color={!topNav ? '#000000' : '#ffffff'} />
          </button>
        </section>
      ) : (
        <section className={`w-1/2 h-full backdrop-blur-md lg:hidden flex-evenly ${!topNav ? 'w-full text-black' : 'text-white'} duration-500`}>
          <a href='/' className='h-[60%]'>
            <img src='/svgs/teslaR.svg' alt='Tesla' className='h-full aspect-square hover:scale-125 duration-300' />
          </a>
        </section>
      )}

      {pathname.length === 1 ? (
        <section className={`w-1/2 h-full backdrop-blur-md hidden lg:flex flex-evenly ${!topNav ? 'w-full text-black' : 'text-white'} duration-500`}>
          <button onClick={() => scrollTo('first')} className='h-[60%]'>
            <img src='/svgs/teslaR.svg' alt='Tesla' className='h-full aspect-square hover:scale-125 duration-300' />
          </button>
          <button onClick={() => scrollTo('first')} className={`w-fit px-5 py-1 flex-center hover:bg-rd hover:text-white hover:rounded-2xl duration-300`}>
            Home
          </button>
          <button onClick={() => scrollTo('second')} className={`w-fit px-5 py-1 flex-center hover:bg-rd hover:text-white hover:rounded-2xl duration-300`}>
            Vehicles
          </button>
          <button onClick={() => scrollTo('third')} className={`w-fit px-5 py-1 flex-center hover:bg-rd hover:text-white hover:rounded-2xl duration-300`}>
            Compare
          </button>
        </section>
      ) : (
        <section className={`w-1/2 h-full backdrop-blur-md hidden lg:flex flex-evenly ${!topNav ? 'w-full text-black' : 'text-white'} duration-500`}>
          <a href='/' className='h-[60%]'>
            <img src='/svgs/teslaR.svg' alt='Tesla' className='h-full aspect-square hover:scale-125 duration-300' />
          </a>
        </section>
      )}
    </nav>
  );
};

export default NavBar;
