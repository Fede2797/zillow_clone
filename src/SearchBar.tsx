
export const SearchBar = () => {
  return (
    <div className="w-full h-[60px] max-w-[668px] my-3 flex justify-center xs:h-[70px] xs:max-w-[83%]">
        <div className="w-full rounded-l-[4px] overflow-hidden">
            <input className="w-full h-full px-5 text-darkgrey placeholder:font-semibold placeholder:text-[#767676]" type="text" placeholder="Enter an address, neighborhood, city, or ZIP code" />
        </div>
        <span className="p-4 flex items-center bg-white rounded-r-[4px] overflow-hidden">
            <img className="w-[25px] h-[25px]" src="icons/search.svg" alt="" />
        </span>
    </div>
  )
}
