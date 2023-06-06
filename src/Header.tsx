import { Navbar } from './Navbar';
import { SearchBar } from './SearchBar';

export const Header = () => {
  return (
    <header className='relative w-full h-[308px] bg-[url("pictures/blue-house-mobile.webp")] bg-cover bg-no-repeat bg-center sm:h-[488px] sm:bg-[url("pictures/blue-house-sm.webp")]'>
        <Navbar />
        <div className='absolute w-full h-full p-4 left-0 top-0 flex flex-col items-center justify-center'>
          <h1 className='mb-[15px] text-[26px] text-center text-white font-frank-ruhl drop-shadow-[0px_0px_5px_#000] md:text-[36px]'>Find it. Tour it. Own it.</h1>
          <SearchBar />
        </div>
    </header>
  )
}
