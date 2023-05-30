import React from 'react';

export default function NavBar() {
  return (
    <>
      <nav className="w-screen bg-gradient-to-tl from-aBitMoreDarkBlue to-from-darkBlue p-6">
        {/* Flex container */}
        <div className="flex items-center justify-between font-monoTitle ">
          {/* Logo */}
          <div className="flex text-2xl lg:ml-11 2xl:ml-36">
            {/* <img src="./thomas" alt="" /> */}
            <div className="text-accentColor">{'<'}</div>
            <div className="text-gray">{'Thomas Albuquerque'}</div>
            <div className="text-accentColor">{'/>'}</div>
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-12 text-lg lg:mr-11 2xl:mr-36">
            <a href="#" className="text-gray hover:text-hoverGray duration-150">
              Sobre mim
            </a>
            <a href="#" className="text-gray hover:text-hoverGray duration-150">
              Portfólio
            </a>
            <a href="#" className="text-gray hover:text-hoverGray duration-150">
              Contato
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
