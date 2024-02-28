import { useEffect } from 'react';
import { crx, opt } from '../../gsap/gsap';

// eslint-disable-next-line react/prop-types
const SideBar = ({ sideBar, color }) => {
  useEffect(() => {
    sideBar && crx();
    !sideBar && opt();
  }, [sideBar]);

  return (
    <div>
      <svg fill={color} width='30px' height='30px' viewBox='60 1 50 36' xmlns='http://www.w3.org/2000/svg' shapeRendering='geometricPrecision' textRendering='geometricPrecision'>
        <path id='line1' d='M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3'></path>
        <path id='line2' d='M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3'></path>
        <path id='line3' d='M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3'></path>
      </svg>
    </div>
  );
};

export default SideBar;
