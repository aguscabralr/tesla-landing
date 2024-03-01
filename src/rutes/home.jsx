import { useEffect, useState } from 'react';
import First from '../components/home/first';
import Second from '../components/home/second';
import Third from '../components/home/third';
import Foo from '../components/footer/foo';
import { sT, wC } from '../gsap/gsap';
import { loadModel } from '../three';

// eslint-disable-next-line react/prop-types
const Home = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 500);

    if (load) {
      loadModel();
      wC();
      sT();
    }
  }, [load]);

  return (
    <section>
      <First />
      <Second />
      <Third />
      <Foo />
    </section>
  );
};

export default Home;
