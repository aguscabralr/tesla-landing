import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const TeslaL = ({ color }) => {
  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      const logo = document.getElementById('logo');

      const { clientX, clientY } = event;
      const { left, top, width, height } = logo.getBoundingClientRect();

      const cursor = {
        x: ((clientY - top - height / 2) / (height / 2)) * 20,
        y: ((clientX - left - width / 2) / (width / 2)) * 20,
      };

      logo.style.transform = `translate(${-cursor.y}px, ${-cursor.x}px)`;
    });
  });

  return (
    <svg id='logo' fill={color} height='95%' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
      <path d='M16 7.151l3.302-4.036c0 0 5.656 0.12 11.292 2.74-1.443 2.182-4.307 3.25-4.307 3.25-0.193-1.917-1.536-2.385-5.807-2.385l-4.479 25.281-4.51-25.286c-4.24 0-5.583 0.469-5.776 2.385 0 0-2.865-1.057-4.307-3.24 5.635-2.62 11.292-2.74 11.292-2.74l3.302 4.031h-0.005z M16 1.953c4.552-0.042 9.766 0.703 15.104 3.036 0.714-1.292 0.896-1.859 0.896-1.859-5.833-2.313-11.297-3.109-16-3.13-4.703 0.021-10.167 0.813-16 3.13 0 0 0.26 0.703 0.896 1.865 5.339-2.344 10.552-3.083 15.104-3.047z' />
    </svg>
  );
};

export default TeslaL;
