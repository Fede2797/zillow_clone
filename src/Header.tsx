import { Navbar } from './Navbar';
import { SearchBar } from './SearchBar';
import { useState } from "react"
import { SideBar } from './SideBar';

export const Header = () => {

  const [showsideBar, setShowSideBar] = useState(false);
  const toggleSideBar = () => setShowSideBar( !showsideBar );

  return (
    <header className="relative w-full h-[308px] sm:h-[488px]">
        <div className="absolute top-0 left-0 w-full h-[308px] bg-smhero bg-cover bg-no-repeat sm:h-[488px] 1xs:bg-mdhero md:bg-lghero lg:bg-xlhero"></div>
        <Navbar showsideBar={showsideBar} toggleSideBar={toggleSideBar}/>
        <div className='absolute w-full h-full p-4 left-0 top-0 flex flex-col items-center justify-center'>
          <h1 className='mb-[15px] text-[26px] text-center text-white font-frank-ruhl drop-shadow-[0px_0px_5px_#000] md:text-[36px]'>Agents. Tours. Loans. Homes.</h1>
          <SearchBar />
        </div>
        {/* SideBar */}
        <SideBar toggleSideBar={toggleSideBar} showsideBar={showsideBar} />
    </header>
  )
}
