
export const Navbar = () => {
  return (
    <div className="w-full h-[60px] py-[18px] px-4 flex justify-between [&>*]:cursor-pointer">
        {/* Hamburger menu */}
        <button>
            <img src="icons/hamburger.svg" alt="" />
        </button>
        {/* Zillow logo/home */}
        <a>
            <img src="logos/z-logo-white.svg" alt="" />
        </a>
        {/* Sign in button */}
        <a href="#" className="font-open-sans text-[15px] text-white">
            Sign in
        </a>
    </div>
  )
}
