import TeslaLT from '../../assets/tesla/teslaLT';

const Foo = () => {
  return (
    <section className='w-full h-[30svh] bg-gry flex-evenly '>
      <div className='w-1/2 h-full flex-center relative'>
        <TeslaLT />
        <p className='text-white text-sm absolute bottom-5'>Tesla by aguscabral © 2024</p>
      </div>
      <div className='w-1/2 h-full py-10 flex-row justify-center'>
        <div className='w-1/4 h-full flex-col items-start'>
          <button onClick={() => scrollTo('second')} className='hover:underline hover:text-white duration-200'>
            Vehicles
          </button>
          <button onClick={() => scrollTo('third')} className='hover:underline hover:text-white duration-200'>
            Compare
          </button>
        </div>
        <div className='w-1/4 h-full flex-col items-start'>
          <a href='/models' className='hover:underline hover:text-white duration-200'>
            Model S
          </a>
          <a href='/model3' className='hover:underline hover:text-white duration-200'>
            Model 3
          </a>
          <a href='/modelx' className='hover:underline hover:text-white duration-200'>
            Model X
          </a>
          <a href='/modely' className='hover:underline hover:text-white duration-200'>
            Model Y
          </a>
        </div>
        <div className='w-1/4 h-full flex-col items-start'>
          <a href='/cyberTruck' className='hover:underline hover:text-white duration-200'>
            CyberTruck
          </a>
          <a href='/roadster' className='hover:underline hover:text-white duration-200'>
            Roadster
          </a>
          <a href='/semi' className='hover:underline hover:text-white duration-200'>
            Semi
          </a>
        </div>
      </div>
    </section>
  );
};

export default Foo;
