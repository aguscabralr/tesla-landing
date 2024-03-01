import TeslaLT from '../../assets/tesla/teslaLT';

const Foo = () => {
  return (
    <section className='w-full landscape:h-[30svh] bg-gry flex flex-col justify-evenly items-center'>
      <article className='w-full landscape:h-[80%] flex portrait:flex-col justify-evenly items-center'>
        <div className='landscape:w-1/2 h-full portrait:p-5 flex flex-col justify-center items-center gap-y-3'>
          <TeslaLT />
          <p className='text-center'>{`Accelerating the World's Transition to Sustainable Energy`}</p>
        </div>
        <div className='w-1/2 h-full flex portrait:flex-col justify-center items-center'>
          <div className='landscape:w-1/4 h-full portrait:pb-3 flex flex-col justify-center items-center landscape:items-start gap-y-3'>
            <button onClick={() => scrollTo('second')} className='text-[3vw] landscape:text-[1.2vw] text-black hover:text-white hover:underline duration-200'>
              Vehicles
            </button>
            <button onClick={() => scrollTo('third')} className='text-[3vw] landscape:text-[1.2vw] text-black hover:text-white hover:underline duration-200'>
              Compare
            </button>
          </div>
          <div className='landscape:w-1/4 h-full portrait:pb-3 flex flex-col justify-center items-center landscape:items-start gap-y-3'>
            <a href='/models' className='text-[3vw] landscape:text-[1.2vw] text-black hover:text-white hover:underline duration-200'>
              Model S
            </a>
            <a href='/model3' className='text-[3vw] landscape:text-[1.2vw] text-black hover:text-white hover:underline duration-200'>
              Model 3
            </a>
            <a href='/modelx' className='text-[3vw] landscape:text-[1.2vw] text-black hover:text-white hover:underline duration-200'>
              Model X
            </a>
            <a href='/modely' className='text-[3vw] landscape:text-[1.2vw] text-black hover:text-white hover:underline duration-200'>
              Model Y
            </a>
          </div>
          <div className='landscape:w-1/4 h-full portrait:pb-3 flex flex-col justify-center items-center landscape:items-start gap-y-3'>
            <a href='/cyberTruck' className='text-[3vw] landscape:text-[1.2vw] text-black hover:text-white hover:underline duration-200'>
              CyberTruck
            </a>
            <a href='/roadster' className='text-[3vw] landscape:text-[1.2vw] text-black hover:text-white hover:underline duration-200'>
              Roadster
            </a>
            <a href='/semi' className='text-[3vw] landscape:text-[1.2vw] text-black hover:text-white hover:underline duration-200'>
              Semi
            </a>
          </div>
        </div>
      </article>
      <article className='w-full h-[20%] p-4 flex portrait:flex-col gap-y-5 justify-between border-t text-gray-400 xs:text-xs sm:text-sm md:text-base'>
        <div className='flex flex-col gap-5 landscape:hidden'>
          <a href='/regions' className='flex items-center gap-2 hover:text-white duration-300'>
            <img src='/svgs/region.svg' alt='Región' className='w-5 h-5 invert' />
            Argentina
          </a>
          <a href='/term' className='hover:text-white duration-300'>
            Términos y condiciones
          </a>
          <a href='/poli' className='hover:text-white duration-300'>
            Política de privacidad y cookies
          </a>
          <p>© 2024 Tesla by aguscabralr</p>
        </div>
        <div className='flex gap-5 portrait:hidden'>
          <a href='/regions' className='flex gap-2 hover:text-white duration-300'>
            <img src='/svgs/region.svg' alt='Región' className='w-5 h-5 invert' />
            Argentina
          </a>
          <span>|</span>
          <p>© 2024 Tesla by aguscabralr</p>
        </div>
        <div className='flex gap-5 portrait:hidden'>
          <a href='/term' className='hover:text-white duration-300'>
            Términos y condiciones
          </a>
          <span>|</span>
          <a href='/poli' className='hover:text-white duration-300'>
            Política de privacidad y cookies
          </a>
        </div>
      </article>
    </section>
  );
};

export default Foo;
