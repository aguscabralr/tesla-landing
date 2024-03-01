import TeslaLT from '../../assets/tesla/teslaLT';
// import TeslaL from '../../assets/tesla/teslaL';

const First = () => {
  return (
    <section id='first' className='w-full h-svh flex flex-col landscape:flex-row bg-gry overflow-hidden'>
      <article id='tsct' className='w-full landscape:w-1/2 h-1/2 landscape:h-full pt-16 px-10 flex flex-col justify-center items-center gap-5 bg-black z-10'>
        <TeslaLT color={'#ffffff'} />
        <h1 className='text-gry text-center'>{`Accelerating the World's Transition to Sustainable Energy`}</h1>
      </article>
      <article className='w-full landscape:w-1/2 h-1/2 landscape:h-full flex justify-center items-center bg-gry relative'>
        <div id='lghb' className='w-full h-1/2 bg-zinc-800 absolute top-0 landscape:hidden'></div>
        <div id='lgwb' className='w-1/2 h-full bg-zinc-800 absolute left-0 hidden landscape:block'></div>
        <div id='lg' className='w-full h-full flex justify-center items-center pt-16 z-10'>
          {/* <TeslaL color={'#c90000'} /> */}
        </div>
      </article>
    </section>
  );
};

export default First;
