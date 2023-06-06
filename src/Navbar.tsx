
export const Navbar = () => {
  return (
    <div className="relative w-full h-[60px] py-[18px] px-4 font-open-sans z-20 lg:h-[80px] lg:bg-white">
      <div className="max-w-[1280px] mx-auto h-full flex justify-between">
        {/* Left menu */}
        <div className="flex items-center [&>*]:hover:cursor-pointer [&>*]:z-20">
          <button className="lg:hidden">
              <img className="w-[18px] h-[18px]" src="icons/hamburger.svg" alt="" />
          </button>
          <ul className="hidden lg:flex gap-6">
            <li>Buy</li>
            <li>Rent</li>
            <li>Sell</li>
            <li>Home Loans</li>
            <li>Agent finder</li>
          </ul>
        </div>
        {/* Right menu */}
        <ul className="flex gap-6 items-center [&>*]:hover:cursor-pointer [&>*]:z-20">
          <li className="hidden lg:block">Manage Rentals</li>
          <li className="hidden lg:block">Advertise</li>
          <li className="hidden lg:block">Help</li>
          <li>
            <a href="#" className="font-open-sans text-[15px] text-white lg:text-black">
                Sign in
            </a>
          </li>
        </ul>
      </div>
      {/* Zillow logo/home */}
      <a className="absolute left-0 top-0 h-[60px] w-full flex items-center lg:h-[80px]">
          <img className="h-[25px] mx-auto lg:hidden hover:cursor-pointer z-20" src="logos/z-logo-white.svg" alt="" />
          <img className="h-[35px] m-auto lg:pl-8 hidden lg:block hover:cursor-pointer z-20" src="logos/z-logo-default.svg" alt="" />
      </a>
    </div>
  )
}
