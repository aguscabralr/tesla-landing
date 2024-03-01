import { useEffect, useState } from 'react';
import { cars } from '../../const/json';
import { previous, selected } from '../../gsap/gsap';
import { Link } from 'react-router-dom';

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
    <section id='second' className='w-full pt-20 flex flex-col gap-y-5 text-black dark:text-white'>
      <h1 id='vhtx' className='px-[5%] text-[10vw] landscape:text-[7vw]'>
        Vehicles.
      </h1>
      <article id='vh' className={`w-full h-[calc(100vh-64px)] flex flex-col overflow-hidden`}>
        <div className={`w-full flex justify-evenly items-center flex-wrap landscape:flex-nowrap`}>
          {cars.map((car, indx) => {
            return (
              <div key={car.name} id={car.ab} onClick={() => handleSelect(cars[indx])} className={`cars w-[30%] landscape:w-[15%] aspect-video ${car.name === select.name ? 'brightness-100' : 'brightness-[20%]'} hover:cursor-pointer hover:brightness-75 transition-[filter] duration-300`}>
                <img src={car.img} alt={car.name} className='p-1 landscape:p-4' />
              </div>
            );
          })}
        </div>
        <div id='shower' className={`w-full h-[calc((100vh-64px)*3/4)] bg-grl dark:bg-grd flex flex-col items-start relative overflow-hidden`}>
          <Link id='select' to={select?.link} className='w-full h-full flex flex-col landscape:flex-row justify-center items-center text-white portrait:text-black dark:text-black portrait:dark:text-white hover:text-black dark:hover:text-white'>
            <h2 className='text-[6vw]'>{select?.name.split(' ')[0]}</h2>
            <img src={select?.img} alt={select?.name} className='z-10' />
            <h2 className='text-[6vw]'>{select?.name.split(' ')[1]}</h2>
          </Link>
          <div id='prev' className='w-full h-full flex flex-col landscape:flex-row justify-center items-center text-white portrait:text-black dark:text-black portrait:dark:text-white absolute left-[-100%]'>
            <h2 className='text-[6vw]'>{prev?.name.split(' ')[0]}</h2>
            <img src={prev?.img} alt={prev?.name} className='w-full landscape:w-auto landscape:h-full p-5 z-10' />
            <h2 className='text-[6vw]'>{prev?.name.split(' ')[1]}</h2>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Second;
