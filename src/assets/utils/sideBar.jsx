import { crx, opt } from '../../gsap/gsap';

// eslint-disable-next-line react/prop-types
const SideBar = ({ sideBar, color }) => {
  sideBar && crx();
  !sideBar && opt();

  return (
    <div>
      {/* <svg width='30px' height='30px' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg' shapeRendering='geometricPrecision' textRendering='geometricPrecision'>
        <g id='line1'>
          <line x1='2' y1='0' x2='28' y2='0' transform='translate(0 2)' stroke='#ffffff' strokeWidth='4' />
          <ellipse rx='2' ry='2' transform='translate(2 2)' fill='#ffffff' />
          <ellipse rx='2' ry='2' transform='translate(28 2)' fill='#ffffff' />
        </g>
        <g id='line2'>
          <line x1='2' y1='0' x2='28' y2='0' transform='translate(0 15)' stroke='#ffffff' strokeWidth='4' />
          <ellipse rx='2' ry='2' transform='translate(2 15)' fill='#ffffff' />
          <ellipse rx='2' ry='2' transform='translate(28 15)' fill='#ffffff' />
        </g>
        <g id='line3'>
          <line x1='2' y1='0' x2='28' y2='0' transform='translate(0 28)' stroke='#ffffff' strokeWidth='4' />
          <ellipse rx='2' ry='2' transform='translate(2 28)' fill='#ffffff' />
          <ellipse rx='2' ry='2' transform='translate(28 28)' fill='#ffffff' />
        </g>
      </svg> */}
      <svg fill={color} width='30px' height='30px' viewBox='60 1 50 36' xmlns='http://www.w3.org/2000/svg' shapeRendering='geometricPrecision' textRendering='geometricPrecision'>
        <path id='line1' d='M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3'></path>
        <path id='line2' d='M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3'></path>
        <path id='line3' d='M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3'></path>
      </svg>
    </div>
  );
};

export default SideBar;
