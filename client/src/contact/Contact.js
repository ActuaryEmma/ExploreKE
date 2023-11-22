import React from 'react';
import { AiFillPhone, AiFillYoutube, AiFillTwitterCircle } from 'react-icons/ai';

function Footer(){
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">This is will be either the contact page or design footer</h2>
            <p className="text-sm mt-2">Your adventure awaits!</p>
          </div>
          <div className="rounded-full outline outline-offset-2 outline-blue-500">
          <AiFillPhone/>
          <p>Phone</p>
          </div>
          <div>
          <AiFillYoutube/>
          <p>Youtube</p>
          </div>
         <div>
         <AiFillTwitterCircle/>
         <p>Twitter</p>
         </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;