import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="w-full h-14 items-center bg-red-400 sticky top-0 justify-between flex py-2 px-6 border-b-4 border-b-red-500 shadow-xl shadow-red-500/50 z-50">
        <h1 className="tracking-wider font-medium text-xl text-white float-start left-0">
          STNK
        </h1>
        <ul className="gap-4 flex justify-center text-gray-300 text-lg">
          <li>
            <a
              href="#Home"
              className="hover:text-white link link-underline link-underline-white leading-tight"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#Product"
              className="hover:text-white link link-underline link-underline-white"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="hover:text-white link link-underline link-underline-white"
            >
              Contact
            </a>
          </li>
        </ul>
        <a
          href="https://shopee.co.id/konci.id?entryPoint=ShopBySearch&searchKeyword=rame%20tech"
          className="text-gray-300 hover:text-white link link-underline link-underline-white text-lg" target='_blank'
        >
          Shop
        </a>
      </nav>
    </>
  );
}

export default Navbar