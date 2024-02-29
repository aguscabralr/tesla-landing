import { useLocation } from 'react-router-dom';
import { details } from '../const/json';
import { useEffect } from 'react';

const Detail = () => {
  const { pathname } = useLocation();
  const detailOf = details[pathname.slice(1)];

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('vid').play();
    }, 1000);
  });

  return (
    <>
      <video id='vid' preload muted autoPlay loop className='w-full h-svh object-cover absolute top-0 left-0 bg-black'>
        <source src={detailOf.vid.wbm} />
        <source src={detailOf.vid.mp4} />
      </video>
      <article className='w-full h-svh pt-20 pb-10 flex flex-col justify-between items-center z-10 absolute top-0 left-0 text-white'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <h1 className='text-5xl font-bold'>{detailOf.name}</h1>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-semibold'>{detailOf.prc.va}</h2>
            <h3 className='font-light'>{detailOf.prc.tx}</h3>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-10'>
          <div className='w-full landscape:w-1/2 flex justify-evenly items-center flex-wrap gap-y-10'>
            <div className='w-1/2 landscape:w-1/4 flex flex-col justify-center items-center'>
              <h2 className='text-2xl font-semibold'>{detailOf.dst.va}</h2>
              <h3 className='font-light'>{detailOf.dst.tx}</h3>
            </div>
            <div className='w-1/2 landscape:w-1/4 flex flex-col justify-center items-center'>
              <h2 className='text-2xl font-semibold'>{detailOf.tme.va}</h2>
              <h3 className='font-light'>{detailOf.tme.tx}</h3>
            </div>
            <div className='w-1/2 landscape:w-1/4 flex flex-col justify-center items-center'>
              <h2 className='text-2xl font-semibold'>{detailOf.spd.va}</h2>
              <h3 className='font-light'>{detailOf.spd.tx}</h3>
            </div>
            <div className='w-1/2 landscape:w-1/4 flex flex-col justify-center items-center'>
              <h2 className='text-2xl font-semibold'>{detailOf.pwr.va}</h2>
              <h3 className='font-light'>{detailOf.pwr.tx}</h3>
            </div>
          </div>
          <div className='w-full landscape:w-1/2 px-[5%] flex justify-evenly items-center gap-5'>
            <button className='w-fit py-1 flex-grow rounded-md border-4 border-white bg-white text-black'>Order Now</button>
            <button className='w-fit py-1 flex-grow rounded-md border-4 border-white'>Demo Drive</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Detail;
