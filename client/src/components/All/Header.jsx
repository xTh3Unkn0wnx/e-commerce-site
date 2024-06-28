import { HiBars3BottomLeft } from 'react-icons/hi2';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header className='fixed top-0 left-0 w-screen h-fit bg-gray-300'>
      <div className='flex flex-row justify-between items-center p-4'>
        <div className='flex row gap-1'>
          <img
            src='https://placehold.co/50x25'
            alt='placeholder'
          />
          <HiBars3BottomLeft className='text-3xl' />
        </div>
        <h1 className='flex justify-center text-3xl font-semibold'>
          My E-Commerce Site
        </h1>
        <div className='h-2/3'>
          <input
            type='text'
            placeholder='Search'
            className='p-1 m-0 border-2 border-gray-500 h-fit'
          />
          <button className='p-2 bg-blue-500 h-full'>Search</button>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <FaShoppingCart className='text-3xl' />
          <div className='flex flex-col gap-1'>
            <button className='p-1 bg-blue-500'>Login</button>
            <button className='p-1 bg-blue-500'>Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
