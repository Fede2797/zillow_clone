
export const SideBar:React.FC<{showsideBar: boolean}> = ({showsideBar}) => {
  return (
    <div className={`${ showsideBar ? 'block' : 'hidden'} absolute top-0 bottom-0 left-0 right-0 h-screen bg-white z-auto lg:hidden`}>
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
  )
}
