import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Header from './components/All/Header';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path='*'
        element={
          <div className='w-screen h-screen flex justify-center items-center text-4xl font-bold text-red-700 bg-gray-500'>
            Not Found
          </div>
        }
      />
    </Routes>
  );
}

export default App;
