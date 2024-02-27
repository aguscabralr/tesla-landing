import { useEffect, useState } from 'react';
import { scrollTo } from '../../gsap/gsap';
import {
  cars,
  //  chargings,
  //   energy
} from '../../const/json';

// eslint-disable-next-line react/prop-types
const Side = ({ sideBar, setSideBar, topNav }) => {
  const [vhcls, setVhcls] = useState(true);
  const [engy, setEngy] = useState(false);
  const [chrg, setChrg] = useState(false);

  useEffect(() => {
    if (!sideBar) {
      // setVhcls(false);
      setEngy(false);
      setChrg(false);
    }
  }, [sideBar]);

  return (
    <section className={`landscape:hidden w-1/2 h-[100svh] pt-16 border-l-2 backdrop-blur-xl absolute top-0 ${sideBar ? 'right-0' : 'right-[-50%]'} ${!topNav ? 'text-black' : 'text-white'} duration-700`}>
      <article className='w-full h-1/3 flex-col'>
        <div className={`w-full ${vhcls ? 'h-64 gap-4' : 'h-[52px] gap-0'} py-2 flex-col flex-alicen border-y duration-700`}>
          <button
            onClick={() => {
              setEngy(false);
              setChrg(false);
              // setVhcls(!vhcls);
            }}
            className={`w-fit px-5 py-1 flex-center lg:hover:bg-rd lg:hover:text-white lg:hover:rounded-2xl ${vhcls && 'bg-rd text-white rounded-2xl'} duration-300`}
          >
            Vehicles
          </button>
          <div className={`${vhcls ? 'h-64' : 'h-0'} flex-col flex-alicen gap-2 overflow-hidden duration-700`}>
            {cars.map((car) => {
              return (
                <a href={car.link} key={car.name} className={`text-gry ${!topNav ? 'hover:text-black' : 'hover:text-white'}`}>
                  {car.name}
                </a>
              );
            })}
            <button
              onClick={() => {
                scrollTo('second'), setSideBar(false);
              }}
            >
              All Cars
            </button>
          </div>
        </div>
        <div className={`w-full py-2 flex-col flex-alicen border-y duration-700`}>
          <button
            onClick={() => {
              scrollTo('third'), setSideBar(false);
            }}
          >
            Compare
          </button>
        </div>
        {/* <div className={`w-full ${engy ? 'h-56 gap-4' : 'h-[52px] gap-0'} py-2 flex-col flex-alicen border-y duration-700`}>
          <button
            onClick={() => {
              setVhcls(false);
              setChrg(false);
              setEngy(!engy);
            }}
            className={`w-fit px-5 py-1 flex-center lg:hover:bg-rd lg:hover:text-white lg:hover:rounded-2xl ${engy && 'bg-rd text-white rounded-2xl'} duration-300`}
          >
            Energy
          </button>
          <div className={`${engy ? 'h-56' : 'h-0'} flex-col flex-alicen gap-2 overflow-hidden duration-700`}>
            {energy.map((ene) => {
              return <button key={ene.name}>{ene.name}</button>;
            })}
            <button onClick={() => scrollTo('third')}>All engy</button>
          </div>
        </div>
        <div className={`w-full ${chrg ? 'h-48 gap-4' : 'h-[52px] gap-0'} py-2 flex-col flex-alicen border-y duration-700`}>
          <button
            onClick={() => {
              setVhcls(false);
              setEngy(false);
              setChrg(!chrg);
            }}
            className={`w-fit px-5 py-1 flex-center lg:hover:bg-rd lg:hover:text-white lg:hover:rounded-2xl ${chrg && 'bg-rd text-white rounded-2xl'} duration-300`}
          >
            Charging
          </button>
          <div className={`${chrg ? 'h-48' : 'h-0'} flex-col flex-alicen gap-2 overflow-hidden duration-700`}>
            {chargings.map((char) => {
              return <button key={char.name}>{char.name}</button>;
            })}
            <button onClick={() => scrollTo('fourth')}>All Chargings</button>
          </div>
        </div> */}
      </article>
    </section>
  );
};

export default Side;
