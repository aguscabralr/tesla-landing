import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/nav';
import Home from './rutes/home';
import Detail from './rutes/detail';

const App = () => {
  return (
    <main className='w-full min-h-svh bg-white dark:bg-zinc-700 pop'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:name' element={<Detail />} />
      </Routes>
    </main>
  );
};

export default App;
