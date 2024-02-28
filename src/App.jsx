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
    }, 500);

    if (load) {
      wC();
      sT();
    }
  });

  return (
    <main className='w-full min-h-svh bg-white dark:bg-zinc-700'>
      {load ? (
        <>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home load={load} />} />
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
