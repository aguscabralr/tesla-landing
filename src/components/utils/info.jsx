/* eslint-disable react/prop-types */
const Info = ({ c1, c2, c3, h }) => {
  return (
    <div className={`w-[95%] landscape:w-[80%] px-5 flex flex-col gap-5 ${h && 'hidden'}`}>
      <div className={`bsp ${c1 ? 'comp1' : c2 ? 'comp2' : c3 && 'comp3'} flex flex-col`}>
        <span>Base Price</span>
        <h2 className='text-xl font-semibold'>{c1?.prc || c2?.prc || c3?.prc}</h2>
      </div>
      <div className={`rng ${c1 ? 'comp1' : c2 ? 'comp2' : c3 && 'comp3'} flex flex-col`}>
        <span>Range</span>
        <h2 className='text-xl font-semibold'>
          {c1?.rng.split(' ')[0] || c2?.rng.split(' ')[0] || c3?.rng.split(' ')[0]} <span className='text-sm font-normal'>{c1?.rng.slice(4) || c2?.rng.slice(4) || c3?.rng.slice(4)}</span>
        </h2>
      </div>
      <div className={`stg ${c1 ? 'comp1' : c2 ? 'comp2' : c3 && 'comp3'} flex flex-col`}>
        <span>
          Seating <span className='text-xs'>{`(Up to)`}</span>
        </span>
        <h2 className='text-xl font-semibold'>
          {c1?.stn.split(' ')[0] || c2?.stn.split(' ')[0] || c3?.stn.split(' ')[0]} <span className='text-sm font-normal'>{c1?.stn.slice(2) || c2?.stn.slice(2) || c3?.stn.slice(2)}</span>
        </h2>
      </div>
      <div className={`crg ${c1 ? 'comp1' : c2 ? 'comp2' : c3 && 'comp3'} flex flex-col`}>
        <span>Cargo Capacity</span>
        <h2 className='text-xl font-semibold'>
          {c1?.crg.split(' ')[0] || c2?.crg.split(' ')[0] || c3?.crg.split(' ')[0]} <span className='text-sm font-normal'>{c1?.crg.slice(3) || c2?.crg.slice(3) || c3?.crg.slice(3)}</span>
        </h2>
      </div>
      <div className={`drv ${c1 ? 'comp1' : c2 ? 'comp2' : c3 && 'comp3'} flex flex-col`}>
        <span>Drive</span>
        <h2 className='text-xl font-semibold'>
          {c1?.drv.split(' ')[0] || c2?.drv.split(' ')[0] || c3?.drv.split(' ')[0]} <span className='text-sm font-normal'>{c1?.drv.slice(4) || c2?.drv.slice(4) || c3?.drv.slice(4)}</span>
        </h2>
      </div>
      <div className={`acc ${c1 ? 'comp1' : c2 ? 'comp2' : c3 && 'comp3'} flex flex-col`}>
        <span>Acceleration</span>
        <h2 className='text-xl font-semibold'>
          {c1?.acc.split(' ')[0] || c2?.acc.split(' ')[0] || c3?.acc.split(' ')[0]} <span className='text-sm font-normal'>{c1?.acc.slice(5) || c2?.acc.slice(5) || c3?.acc.slice(5)}</span>
        </h2>
      </div>
      <div className={`spd ${c1 ? 'comp1' : c2 ? 'comp2' : c3 && 'comp3'} flex flex-col`}>
        <span>
          Top Speed <span className='text-xs'>{`(Up to)`}</span>
        </span>
        <h2 className='text-xl font-semibold'>
          {c1?.spd.split(' ')[0] || c2?.spd.split(' ')[0] || c3?.spd.split(' ')[0]} <span className='text-sm font-normal'>{c1?.spd.slice(4) || c2?.spd.slice(4) || c3?.spd.slice(4)}</span>
        </h2>
      </div>
    </div>
  );
};

export default Info;
