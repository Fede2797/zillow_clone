
export const FooterInfo = () => {
  return (
    <div className='w-full py-6 flex flex-col items-center text-[10px] gap-6 text-center text-[#54545A] [&>*]:max-w-[720px] [&>*]:mx-6 [&>*]:leading-4 [&>*]:xs:mx-auto'>
        {/* Info section */}
        <div>Zillow Group is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please <a className='underline text-[#0D4599]' href="#" rel="noopener noreferrer">let us know.</a></div>

        <div>
          Zillow, Inc. holds real estate brokerage <a className='underline text-[#0D4599]' href="#">licenses</a> in multiple states. Zillow (Canada), Inc. holds real estate brokerage <a className='underline text-[#0D4599]' href="#">licenses</a> in multiple provinces.
          <br />
          <a className='underline text-[#0D4599]' href="#">
            § 442-H New York Standard Operating Procedures
          </a>
          <br />
          <a className='underline text-[#0D4599]' href="#">
            § New York Fair Housing Notice
          </a>
          <br />
          <a className='underline text-[#0D4599]' href="#">
            TREC: Information about brokerage services, Consumer protection notice
          </a>
          <br />
          California DRE #1522444
          <br />
          <a className='block m-2 text-[14px] underline text-[#0D4599]' href="">Contact Zillow, Inc. Brokerage</a>
        </div>

        <div>For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.</div>

        {/* App download section */}
        <div className='flex gap-2 [&>*]:cursor-pointer'>
          <figure><img src="footer/app-store-badge.svg" alt="" /></figure>
          <figure><img src="footer/google-play-badge.svg" alt="" /></figure>
        </div>

        {/* Socials section */}
        <ul className='text-[#666666] text-[12px] italic'>
          <li className='inline-block ml-2 mb-6'>
            <div className='flex items-center cursor-pointer'>
              <figure><img className='w-[152px]' src="logos/z-logo-default.svg" alt="" /></figure>
            </div>
          </li>
          <li className='inline-block w-[221px] h-[45px] ml-2 mb-6'>
            <div className='!flex items-center [&>*]:ml-2'>
              <span className='inline-block'>Follow us:</span>
              <figure className='inline-block max-w-[32px] cursor-pointer'><img src="socials/facebook.svg" alt="" /></figure>
              <figure className='inline-block max-w-[32px] cursor-pointer'><img src="socials/instagram.svg" alt="" /></figure>
              <figure className='inline-block max-w-[32px] cursor-pointer'><img src="socials/tiktok.svg" alt="" /></figure>
              <figure className='inline-block max-w-[32px] cursor-pointer'><img src="socials/twitter.svg" alt="" /></figure>
            </div>
          </li>
          <li className='inline-block ml-2 mb-6 [&>*]:inline-block'>
            <div className='!flex items-center justify-center'>
              <span>© 2006-2023 Zillow</span>
              <figure className='inline-block max-w-[32px] mx-1 cursor-pointer'><img className='w-8 h-8' src="footer/house-logo.svg" alt="" /></figure>
            </div>
          </li>
        </ul>
      </div>
  )
}
