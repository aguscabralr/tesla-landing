/* eslint-disable react/prop-types */
import { compare } from '../../const/json';
import { comp } from '../../gsap/gsap';

const Select = ({ o1, o2, o3, c1, c2, c3, setS, setO }) => {
  return (
    <section className='w-full px-5 py-2 bg-gray-200 border border-black absolute top-[100%] left-0 z-10'>
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
                  className={`w-full flex-between text-sm p-1 ${v.v === c1.v || v.v === c2.v || v.v === c3?.v ? 'bg-gray-500 cursor-default' : 'hover:bg-gray-300 cursor-pointer'} select-none`}
                >
                  {v.name} <div className='bg-gray-200 px-1 border rounded-full'>{`${v.v === c1.v ? '1' : ''} ${v.v === c2.v ? '2' : ''} ${v.v === c3?.v ? '3' : ''}`}</div>
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
