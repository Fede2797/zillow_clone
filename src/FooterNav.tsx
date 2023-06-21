
export const FooterNav = () => {
  return (
    <nav className='py-6 border border-y-[#d8d8d8]'>
        <ul className='columns-2 text-[14px] leading-6 xs:columns-1 xs:text-center [&>*]:mx-6 [&>*]:pt-[10px] [&>*]:xs:inline-block [&>*]:xs:mx-[10px] [&>*]:cursor-pointer'>
          <li>About</li>
          <li>Zestimates</li>
          <li>Research</li>
          <li>Careers</li>
          <li>Help</li>
          <li>Advertise</li>
          <li>Fair Housing Guide</li>
          <li>Terms of use</li>
          <li>Privacy Portal</li>
          <li>Cookie Preference</li>
          <li>Blog</li>
          <li>AI</li>
          <li>Mobile Apps</li>
        </ul>
        <ul className='columns-2 text-[14px] leading-6 xs:columns-1 xs:text-center [&>*]:mx-6 [&>*]:pt-[10px] [&>*]:xs:inline-block [&>*]:xs:mx-[10px] [&>*]:cursor-pointer'>
          <li>Trulia</li>
          <li>StreetEasy</li>
          <li>HotPads</li>
          <li>Out East</li>
          <li>ShowingTime+</li>
        </ul>
        <div className='ml-6 mt-4 text-[#0D4599] xs:ml-0 xs:flex xs:justify-center'>
          <a className='hover:underline' href="#">Do Not Sell or Share My Personal Information →</a>
        </div>
      </nav>
  )
}
