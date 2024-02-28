import First from '../components/home/first';
import Second from '../components/home/second';
import Third from '../components/home/third';
import Foo from '../components/footer/foo';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Home = ({ load }) => {
  const [canva, setCanva] = useState(true);

  if (load) {
    setTimeout(() => {
      setCanva(false);
    }, 1000);
  }
  return (
    <section>
      <article className={`w-full h-screen bg-gry absolute top-0 left-0 ${canva ? 'z-50' : 'z-0'}`}></article>
      <First />
      <Second />
      <Third />
      <Foo />
    </section>
  );
};

export default Home;
