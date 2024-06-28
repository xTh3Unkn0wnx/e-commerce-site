function Header() {
  return (
    <header className='fixed top-0 left-0 w-screen h-fit bg-white'>
      <h1 className='flex justify-center text-3xl font-semibold'>
        My E-Commerce Site
      </h1>
      <div className="flex flex-row justify-between">
        <div>Dropdown</div>
        <div>Search</div>
        <div>Cart</div>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
