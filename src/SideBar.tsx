
export const SideBar:React.FC<{showsideBar: boolean, toggleSideBar: () => void}> = ({showsideBar, toggleSideBar}) => {
  return (
    <div className={`${ showsideBar ? 'block' : 'hidden'} absolute top-0 bottom-0 left-0 right-0 h-screen bg-white z-auto lg:hidden`}>
        <ul className='mt-[60px] w-full flex flex-col font-open-sans text-[15px] [&>*]:py-3 [&>*]:pl-[13px] [&>*]:h-[53px] [&>*]:border-t-[1px] [&>*:last-child]:border-b-[1px]'>
        <li onClick={toggleSideBar}>Buy</li>
        <li onClick={toggleSideBar}>Rent</li>
        <li onClick={toggleSideBar}>Sell</li>
        <li onClick={toggleSideBar}>Home Loans</li>
        <li onClick={toggleSideBar}>Agent finder</li>
        <li onClick={toggleSideBar}>Manage Rentals</li>
        <li onClick={toggleSideBar}>Advertise</li>
        <li onClick={toggleSideBar}>Help</li>
        </ul>
    </div>
  )
}
