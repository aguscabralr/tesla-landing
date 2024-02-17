import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/nav';
import Home from './rutes/home';
import Detail from './rutes/detail';
import { useEffect, useState } from 'react';
import { sT, wC } from './gsap/gsap';

const App = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);

    if (load) {
      wC();
      sT();
    }
  });

  return (
    <main className='w-full h-full'>
      {load ? (
        <>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:name' element={<Detail />} />
          </Routes>
        </>
      ) : (
        <section className='absolute w-full h-full bg-gry z-[100]'></section>
      )}
    </main>
  );
};

export default App;
