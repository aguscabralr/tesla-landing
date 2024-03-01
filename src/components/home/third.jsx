import { useEffect, useState } from 'react';
import { compare } from '../../const/json';
import Select from '../utils/select';
import Info from '../utils/info';
import gsap from 'gsap';

const Third = () => {
  const [s1, setS1] = useState({ m: 0, v: 0 });
  const [o1, setO1] = useState(false);
  const [c1, setC1] = useState(compare[s1.m].v[s1.v]);
  const [s2, setS2] = useState({ m: 1, v: 0 });
  const [o2, setO2] = useState(false);
  const [c2, setC2] = useState(compare[s2.m].v[s2.v]);
  const [s3, setS3] = useState(null);
  const [o3, setO3] = useState(false);
  const [c3, setC3] = useState(compare[2].v[0]);

  useEffect(() => {
    setC1(compare[s1.m].v[s1.v]);
    setC2(compare[s2.m].v[s2.v]);
    setC3(compare[s3?.m]?.v[s3?.v]);
  }, [s1, s2, s3]);

  return (
    <section id='third' className='w-full pt-20 mb-20 flex flex-col gap-y-10 text-black dark:text-white'>
      <article className='flex flex-col gap-5'>
        <h1 id='cmtx' className='px-[5%] text-[10vw] landscape:text-[7vw]'>
          Compare Models.
        </h1>
        <h2 id='cmst' className='px-[5%] text-[3.5vw] landscape:text-[1.5vw]'>
          Discover which Tesla models meet your needs by answering questions about your budget, driving habits and lifestyle.
        </h2>
      </article>
      <article className={`w-full landscape:px-[10%] flex justify-center relative overflow-hidden`}>
        <div id='cms1' className={`${s3 ? 'w-1/3' : 'w-[45%]'} flex flex-col justify-center items-center gap-5`}>
          <img src={compare[s1.m].img} alt={compare[s1.m].name} className='scale-125' />
          <div
            onClick={() => {
              if (!o1) {
                setO1(true);
                setO2(false);
                setO3(false);
              }
            }}
            className={`w-[95%] landscape:w-[80%] h-16 px-2 landscape:px-5 flex flex-col justify-center  ${o1 ? 'bg-gray-200 dark:bg-zinc-600 rounded-t-xl' : 'bg-gray-100 dark:bg-zinc-500 rounded-xl'} cursor-pointer duration-150 relative`}
          >
            <h1 className='text-2xl font-semibold select-none'>{compare[s1.m].name}</h1>
            <h2 className='text-lg select-none line-clamp-1'>{compare[s1.m].v[s1.v].name}</h2>
            <button onClick={() => o1 && setO1(false)} className='absolute right-5'>
              <img src={o1 ? '/svgs/close.svg' : '/svgs/downA.svg'} alt='open' className='w-6 h-6' />
            </button>
            {o1 && <Select o1={o1} o2={o2} o3={o3} c1={c1} c2={c2} c3={c3} setS={setS1} setO={setO1} />}
          </div>
          <Info c1={c1} />
        </div>
        <div id='cms2' className={`${s3 ? 'w-1/3' : 'w-[45%]'} flex flex-col justify-center items-center gap-5`}>
          <img src={compare[s2.m].img} alt={compare[s2.m].name} className='scale-125' />
          <div
            onClick={() => {
              if (!o2) {
                setO1(false);
                setO2(true);
                setO3(false);
              }
            }}
            className={`w-[95%] landscape:w-[80%] h-16 px-2 landscape:px-5 flex flex-col justify-center border ${o2 ? 'bg-gray-200 dark:bg-zinc-600 rounded-t-xl border-black' : 'bg-gray-100 dark:bg-zinc-500 rounded-xl border-transparent'} cursor-pointer duration-150 relative`}
          >
            <h1 className='text-2xl font-semibold select-none'>{compare[s2.m].name}</h1>
            <h2 className='text-lg select-none line-clamp-1'>{compare[s2.m].v[s2.v].name}</h2>
            <button onClick={() => o2 && setO2(false)} className='absolute right-5'>
              <img src={o2 ? '/svgs/close.svg' : '/svgs/downA.svg'} alt='open' className='w-6 h-6' />
            </button>
            {o2 && <Select o1={o1} o2={o2} o3={o3} c1={c1} c2={c2} c3={c3} setS={setS2} setO={setO2} />}
          </div>
          <Info c2={c2} />
        </div>
        <div id='cms3' className={`portrait:hidden ${s3 ? 'w-1/3' : 'w-[10%]'} flex flex-col justify-center items-center gap-5`}>
          {s3 ? (
            <img src={compare[s3.m].img} alt={compare[s3.m].name} className='scale-125' />
          ) : (
            <button
              id='abtn'
              type='button'
              onClick={() => {
                setS3(0 !== s1.m && 0 !== s2.m ? { m: 0, v: 0 } : 1 !== s1.m && 1 !== s2.m ? { m: 1, v: 0 } : 2 !== s1.m && 2 !== s2.m ? { m: 2, v: 0 } : 3 !== s1.m && 3 !== s2.m && { m: 3, v: 0 });
                gsap.from('#cms3', { xPercent: 100, opacity: 0 });
              }}
              className='absolute top-[10%] right-[8%] hidden landscape:block'
            >
              <img src='/svgs/plus.svg' alt='plus' className='w-8 h-8 border border-black rounded-full dark:invert' />
            </button>
          )}
          <div
            onClick={() => {
              if (!o3) {
                setO1(false);
                setO2(false);
                setO3(true);
              }
            }}
            className={`${!s3 && 'hidden'} w-[80%] h-16 px-2 landscape:px-5flex flex-col justify-center border ${o3 ? 'bg-gray-200 dark:bg-zinc-600 rounded-t-xl border-black' : 'bg-gray-100 dark:bg-zinc-500 rounded-xl border-transparent'} cursor-pointer duration-150 relative`}
          >
            <h1 className='text-2xl font-semibold select-none'>{compare[s3?.m]?.name}</h1>
            <h2 className='text-lg select-none line-clamp-1'>{compare[s3?.m]?.v[s3?.v]?.name}</h2>
            <button onClick={() => o3 && setO3(false)} className='absolute right-5'>
              <img src={o3 ? '/svgs/close.svg' : '/svgs/downA.svg'} alt='open' className='w-6 h-6' />
            </button>
            {o3 && <Select o1={o1} o2={o2} o3={o3} c1={c1} c2={c2} c3={c3} setS={setS3} setO={setO3} />}
          </div>
          <Info c3={c3} h={!s3} />
          <button type='button' onClick={() => setS3(null)} className={`${!s3 && 'hidden'} absolute top-2 right-2`}>
            <img src='/svgs/close.svg' alt='close' className='w-8 h-8 border border-black rounded-full dark:invert' />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Third;
