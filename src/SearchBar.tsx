
export const SearchBar = () => {
  return (
    <div className="group w-full h-[60px] my-3 flex justify-center rounded-[4px] xs:h-[70px] xs:max-w-[83%] hover:outline hover:outline-blue hover:outline-1 focus-within:shadow-custom focus-within:outline focus-within:outline-1 focus-within:outline-blue max-w-[450px] md:max-w-[670px]">
        <div className="w-full rounded-l-[4px] overflow-hidden">
            <input className="w-full h-full px-5 text-darkgrey placeholder:font-semibold placeholder:text-[#767676] hover:border-none focus:outline-none" type="text" placeholder="Enter an address, neighborhood, city, or ZIP code" />
        </div>
        <span className="p-4 flex items-center bg-white rounded-r-[4px] overflow-hidden hover:cursor-pointer">
            <img className="w-[25px] h-[25px]" src="icons/search.svg" alt="" />
        </span>
    </div>
  )
}
