import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <nav className='bg-blue-400 w-full'>
        <div className='container mx-auto md:px-5'>
          <div className='flex justify-between space-x-5 items-center'>
            <div className='logo flex-1 py-5'>
              <span className='text-white font-extrabold uppercase text-2xl'>
                Kledo test
              </span>
            </div>
            <div className='flex text-white space-x-4 text-sm'>
              <Link
                to='/profile'
                className='cursor-pointer border border-transparent hover:border-white rounded-full px-4 py-2'>
                profile
              </Link>
              <Link
                to='/'
                className='cursor-pointer border border-transparent hover:border-white rounded-full px-4 py-2'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className='container mx-auto md:px-5 bg'>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
