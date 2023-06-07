import { Navbar } from './Navbar';
import { SearchBar } from './SearchBar';
import { useState } from "react"

export const Header = () => {

  const [showsideBar, setShowSideBar] = useState(true);
  const toggleSideBar = () => setShowSideBar( !showsideBar );

  return (
    <header className='relative w-full h-[308px] bg-[url("pictures/blue-house-mobile.webp")] bg-cover bg-no-repeat bg-center sm:h-[488px] sm:bg-[url("pictures/blue-house-sm.webp")]'>
        <Navbar showsideBar={showsideBar} toggleSideBar={toggleSideBar}/>
        <div className='absolute w-full h-full p-4 left-0 top-0 flex flex-col items-center justify-center'>
          <h1 className='mb-[15px] text-[26px] text-center text-white font-frank-ruhl drop-shadow-[0px_0px_5px_#000] md:text-[36px]'>Find it. Tour it. Own it.</h1>
          <SearchBar />
        </div>
        {/* SideBar */}
        <div className={`${ showsideBar ? 'block' : 'hidden'} absolute top-0 bottom-0 left-0 right-0 h-screen bg-white z-auto`}>
          <ul className='mt-[60px] w-full flex flex-col font-open-sans text-[15px] [&>*]:py-3 [&>*]:pl-[13px] [&>*]:h-[53px] [&>*]:border-t-[1px] [&>*:last-child]:border-b-[1px]'>
            <li>Buy</li>
            <li>Rent</li>
            <li>Sell</li>
            <li>Home Loans</li>
            <li>Agent finder</li>
            <li>Manage Rentals</li>
            <li>Advertise</li>
            <li>Help</li>
          </ul>
        </div>
    </header>
  )
}
