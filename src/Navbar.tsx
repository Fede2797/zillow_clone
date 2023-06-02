
export const Navbar = () => {
  return (
    <div className="w-full h-[60px] py-[18px] px-4 flex justify-between [&>*]:cursor-pointer">
        {/* Hamburger menu */}
        <button>
            <img className="w-[18px] h-[18px]" src="icons/hamburger.svg" alt="" />
        </button>
        {/* Zillow logo/home */}
        <a className="ml-4">
            <img className="h-[25px]" src="logos/z-logo-white.svg" alt="" />
        </a>
        {/* Sign in button */}
        <a href="#" className="font-open-sans text-[15px] text-white">
            Sign in
        </a>
    </div>
  )
}
