import { useEffect, useState } from 'react';
import { cars } from '../../const/json';
import { previous, selected } from '../../gsap/gsap';

const Second = () => {
  const [select, setSelect] = useState(cars[0]);
  const [before, setBefore] = useState(null);
  const [prev, setPrev] = useState(null);

  const handleSelect = (car) => {
    if (select && select.name === car.name) {
      setBefore(null);
      setPrev(null);
    } else {
      setSelect(car);
      previous();
      selected();
    }
  };
  useEffect(() => {
    if (before && select !== before) {
      setPrev(before);
    }
    setBefore(select);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select]);

  return (
    <section id='second' className='w-full pt-20 flex-col gap-y-5'>
      <h1 id='vhtx' className='px-[5%] text-5xl'>
        Vehicles.
      </h1>
      <article id='vh' className={`w-full h-[calc(100vh-64px)] flex-col overflow-hidden`}>
        <div className={`w-full flex-evenly flex-wrap lg:flex-nowrap`}>
          {cars.map((car, indx) => {
            return (
              <div key={car.name} id={car.ab} onClick={() => handleSelect(cars[indx])} className={`cars w-[30%] lg:w-[15%] aspect-video ${car.name === select.name ? 'brightness-100' : 'brightness-[20%]'} hover:cursor-pointer hover:brightness-75 transition-[filter] duration-300`}>
                <img src={car.img} alt={car.name} className='p-1 lg:p-4' />
              </div>
            );
          })}
        </div>
        <div className={`w-full h-[calc((100vh-64px)*3/4)] bg flex-col items-start relative overflow-hidden`}>
          <div id='select' className='w-full h-full flex-col lg:flex-row flex-center'>
            <div id='seltx' className='w-full flex-col flex-center lg:hidden'>
              <h2 className='text-5xl lg:text-8xl'>{select?.name}</h2>
              <a href={select?.link} target='_blank' rel='noreferrer' className='underline hover:text-white'>
                Learn
              </a>
            </div>
            <img src={select?.img} alt={select?.name} className='w-full lg:w-auto lg:h-full p-5 z-10' />
            <div id='seltx' className='w-1/2 h-full flex-col flex-center hidden lg:flex'>
              <h2 className='text-5xl lg:text-8xl'>{select?.name}</h2>
              <a href={select?.link} target='_blank' rel='noreferrer' className='underline hover:text-white'>
                Learn
              </a>
            </div>
          </div>
          <div id='prev' className='w-full h-full flex-col lg:flex-row flex-center absolute left-[-100%]'>
            <div className='w-full flex-col flex-center lg:hidden'>
              <h2 className='text-5xl lg:text-8xl'>{prev?.name}</h2>
              <a href={select?.link} target='_blank' rel='noreferrer' className='underline hover:text-white'>
                Learn
              </a>
            </div>
            <img src={prev?.img} alt={prev?.name} className='w-full lg:w-auto lg:h-full p-5 z-10' />
            <div className='w-1/2 h-full flex-col flex-center hidden lg:flex'>
              <h2 className='text-5xl lg:text-8xl'>{prev?.name}</h2>
              <a href={select?.link} target='_blank' rel='noreferrer' className='underline hover:text-white'>
                Learn
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Second;
