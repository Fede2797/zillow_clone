import { useState } from "react"
import { RealEstateData, RentalsData, MortgageData, BrowseData } from "./data/data"
import { DropDownList } from "./DropDownList"

type DropDownOpenedState = {
    first_drop_open: boolean;
    second_drop_open: boolean;
    third_drop_open: boolean;
    forth_drop_open: boolean;
};

export const DropDownSection = () => {

    const [dropDownOpened, setDropDownOpened] = useState<DropDownOpenedState>({
        first_drop_open: false,
        second_drop_open: false,
        third_drop_open: false,
        forth_drop_open: false,
      })
    
      const toggleDropDown = ( dropDown: keyof DropDownOpenedState) => {
        setDropDownOpened(prevState => ({
          ...prevState,
          [dropDown]: !prevState[dropDown]
        }));
      }

    return (
        <ul className="max-w-[1200px] w-full mx-auto px-6 grid grid-cols-2 font-bold [&>*]:mb-2 [&>*]:pr-[10px] [&>*]:md:mb-0 md:grid-cols-4 md:py-[31px]">
        <li className="relative pr-[10px] before:content-[' '] before:w-[1px] before:h-6 before:absolute before:top-3 before:right-1 before:bg-[#A7A6AB] md:before:h-8 md:before:top-2 md:text-center">
          <span onClick={ () => toggleDropDown("first_drop_open") } className="block w-full py-3 pr-10 bg-[url('../footer/arrow_down.svg')] bg-no-repeat bg-right md:inline-block md:mx-auto hover:underline cursor-pointer">Real Estate</span>
          <DropDownList show={dropDownOpened.first_drop_open} data={RealEstateData} />
        </li>
        <li className="relative pr-[10px] pl-[10px] md:before:content-[' '] md:before:w-[1px] md:before:absolute md:before:right-1 md:before:bg-[#A7A6AB] md:before:h-8 md:before:top-2 md:text-center">
          <span onClick={ () => toggleDropDown("second_drop_open") } className="block w-full py-3 pr-10 bg-[url('../footer/arrow_down.svg')] bg-no-repeat bg-right md:inline-block md:mx-auto hover:underline cursor-pointer">Rentals</span>
          <DropDownList show={dropDownOpened.second_drop_open} data={RentalsData} />
        </li>
        <li className="relative pr-[10px] before:content-[' '] before:w-[1px] before:h-6 before:absolute before:top-3 before:right-1 before:bg-[#A7A6AB] md:pl-[10px] md:before:h-8 md:before:top-2 md:text-center">
          <span onClick={ () => toggleDropDown("third_drop_open") } className="block w-full py-3 pr-10 bg-[url('../footer/arrow_down.svg')] bg-no-repeat bg-right md:inline-block md:mx-auto hover:underline cursor-pointer">Mortgage Rates</span>
          <DropDownList show={dropDownOpened.third_drop_open} data={MortgageData} />
        </li>
        <li className="pr-[10px] pl-[10px] md:text-center">
          <span onClick={ () => toggleDropDown("forth_drop_open") } className="block w-full py-3 pr-10 bg-[url('../footer/arrow_down.svg')] bg-no-repeat bg-right md:inline-block md:mx-auto hover:underline cursor-pointer">Browse Homes</span>
          <DropDownList show={dropDownOpened.forth_drop_open} data={BrowseData} />
        </li>
      </ul>
    )
}
