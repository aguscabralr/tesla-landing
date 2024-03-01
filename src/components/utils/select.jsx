/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { compare } from '../../const/json';
import { comp } from '../../gsap/gsap';

const Select = ({ o1, o2, o3, c1, c2, c3, setS, setO }) => {
  const [opn, setOpn] = useState(null);

  useEffect(() => {
    o1 ? setOpn('o1') : o2 ? setOpn('o2') : o3 ? setOpn('o3') : setOpn(null);
  }, [o1, o2, o3]);

  return (
    <section className={`w-full ${opn ? 'h-[365px] translate-y-[0] z-10' : 'h-0 -translate-y-5 -z-10'} px-2 landscape:px-5 py-2 bg-gray-200 dark:bg-zinc-600 border border-black rounded-b-2xl overflow-hidden absolute top-[100%] left-0 duration-300`}>
      {compare.map((car, indx) => {
        return (
          <div key={indx} className=''>
            <h1 className='font-semibold select-none cursor-default'>{car.name}</h1>
            {car.v.map((v, indx) => {
              return (
                <h2
                  key={indx}
                  onClick={() => {
                    if (v.v !== c1.v && v.v != c2.v && v.v != c3?.v) {
                      setS(v.v);
                      setO(false);
                      comp((o1 && 'comp1') || (o2 && 'comp2') || (o3 && 'comp3'));
                    }
                  }}
                  className={`w-full flex justify-between items-center text-sm p-1 ${v.v === c1.v || v.v === c2.v || v.v === c3?.v ? 'bg-gray-500 cursor-default' : 'hover:bg-gray-300 hover:text-black cursor-pointer'} select-none`}
                >
                  {v.name}
                </h2>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Select;
