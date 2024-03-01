import { Link } from 'react-router-dom';
import TeslaLT from '../../assets/tesla/teslaLT';

const Foo = () => {
  return (
    <section className='w-full landscape:h-[30svh] bg-gry flex flex-col justify-evenly items-center'>
      <article className='w-full landscape:h-[80%] portrait:pt-10 flex portrait:flex-col justify-evenly items-center'>
        <div className='landscape:w-1/2 h-full portrait:p-5 portrait:px-10 flex flex-col justify-center items-center gap-y-3'>
          <TeslaLT color={'#ffffff'} />
          <p className='text-center'>{`Accelerating the World's Transition to Sustainable Energy`}</p>
        </div>
        <div className='w-1/2 h-full flex portrait:flex-col justify-center items-center'>
          <div className='landscape:w-1/4 h-full portrait:pb-3 flex flex-col justify-center items-center landscape:items-start gap-y-3'>
            <button onClick={() => scrollTo('second')} className='text-[3vw] landscape:text-[1.2vw] text-gray-400 hover:text-white hover:underline duration-200'>
              Vehicles
            </button>
            <button onClick={() => scrollTo('third')} className='text-[3vw] landscape:text-[1.2vw] text-gray-400 hover:text-white hover:underline duration-200'>
              Compare
            </button>
          </div>
          <div className='landscape:w-1/4 h-full portrait:pb-3 flex flex-col justify-center items-center landscape:items-start gap-y-3'>
            <Link to='/models' className='text-[3vw] landscape:text-[1.2vw] text-gray-400 hover:text-white hover:underline duration-200'>
              Model S
            </Link>
            <Link to='/model3' className='text-[3vw] landscape:text-[1.2vw] text-gray-400 hover:text-white hover:underline duration-200'>
              Model 3
            </Link>
            <Link to='/modelx' className='text-[3vw] landscape:text-[1.2vw] text-gray-400 hover:text-white hover:underline duration-200'>
              Model X
            </Link>
            <Link to='/modely' className='text-[3vw] landscape:text-[1.2vw] text-gray-400 hover:text-white hover:underline duration-200'>
              Model Y
            </Link>
          </div>
          <div className='landscape:w-1/4 h-full portrait:pb-3 flex flex-col justify-center items-center landscape:items-start gap-y-3'>
            <Link to='/cyberTruck' className='text-[3vw] landscape:text-[1.2vw] text-gray-400 hover:text-white hover:underline duration-200'>
              CyberTruck
            </Link>
            <button className='text-[3vw] landscape:text-[1.2vw] text-gray-400 hover:text-white hover:underline duration-200'>Roadster</button>
            <button className='text-[3vw] landscape:text-[1.2vw] text-gray-400 hover:text-white hover:underline duration-200'>Semi</button>
          </div>
        </div>
      </article>
      <article className='w-full h-[20%] p-4 px-[15%] flex portrait:flex-col gap-y-5 justify-between items-center border-t text-gray-400 xs:text-xs sm:text-sm md:text-base'>
        <div className='flex flex-col items-center gap-5 landscape:hidden'>
          <button className='flex items-center gap-2 hover:text-white duration-300'>
            <img src='/svgs/region.svg' alt='Región' className='w-5 h-5 invert' />
            Argentina
          </button>
          <button className='hover:text-white duration-300'>Términos y condiciones</button>
          <button className='hover:text-white duration-300'>Política de privacidad y cookies</button>
          <p>© 2024 Tesla by aguscabralr</p>
        </div>
        <div className='flex gap-5 portrait:hidden'>
          <button className='flex gap-2 hover:text-white duration-300'>
            <img src='/svgs/region.svg' alt='Región' className='w-5 h-5 invert' />
            Argentina
          </button>
          <span>|</span>
          <p>© 2024 Tesla by aguscabralr</p>
        </div>
        <div className='flex gap-5 portrait:hidden'>
          <button className='hover:text-white duration-300'>Términos y condiciones</button>
          <span>|</span>
          <button className='hover:text-white duration-300'>Política de privacidad y cookies</button>
        </div>
      </article>
    </section>
  );
};

export default Foo;
