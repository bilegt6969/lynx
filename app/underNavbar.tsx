import React from 'react'

function underNavbar() {
  return (
    <div>
        <div className="relative z-0 flex space-x-3 text-[1rem] bg-[#F4F3F1] font-normal border-t-[0.1rem] border-gray-300 shrink-0 sm:flex p-2 lg:mt-[1rem] justify-center lg:text-xl lg:space-x-[50px] md:space-x-[30px] sm:space-x-[15px] items-center text-black ">
            <li className="list-none">
              <p className="hover:text-gray-400 font-medium  cursor-pointer">
                Sneakers
              </p>
            </li>
            <li className="list-none">
              <p className="hover:text-gray-400 font-medium  cursor-pointer">
                Shoes
              </p>
            </li>
            <li className="list-none">
              <p className="hover:text-gray-400 font-medium  cursor-pointer">
                Apparel
              </p>
            </li>
            <li className="list-none">
              <p className="hover:text-gray-400 font-medium  cursor-pointer">
                Electronics
              </p>
            </li>
            <li className="list-none">
              <p className="hover:text-gray-400 font-medium  cursor-pointer">
                Collectibles
              </p>
            </li>
          </div>
    </div>
  )
}

export default underNavbar