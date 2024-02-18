import TeslaL from '../../assets/tesla/teslaL';
import TeslaLT from '../../assets/tesla/teslaLT';

const First = () => {
  return (
    <section id='first' className='w-full h-screen bg-gry flex flex-col lg:flex-row text-white'>
      <article id='tsct' className='w-full lg:w-1/2 h-1/2 lg:h-full pt-16 px-10 flex-col flex-center gap-5 bg-black z-10'>
        <TeslaLT color={'#ffffff'} />
        <h1 className='text-gry text-center'>{`Accelerating the World's Transition to Sustainable Energy`}</h1>
      </article>
      <article className='w-full lg:w-1/2 h-1/2 lg:h-full flex-center bg-gry relative'>
        <div id='lghb' className='w-full h-1/2 bg-black absolute top-0 lg:hidden'></div>
        <div id='lgwb' className='w-1/2 h-full bg-black absolute left-0 hidden lg:block'></div>
        <div id='lg' className='w-full h-[70%] pt-16 z-10'>
          <TeslaL color={'#c90000'} />
        </div>
      </article>
    </section>
  );
};

export default First;
