import React from "react";
import { Link } from "react-router-dom";

const Not_Found = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=''>
        <h4 className='font-extrabold text-5xl'> 404</h4>
        <p className='mt-4 font-semibold'>
          You lost, Page you search not found this
        </p>
        <Link
          to='/'
          className='font-medium text-sm text-blue-500 border-b-2 border-blue-500 cursor-pointer'>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Not_Found;
