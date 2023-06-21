import { DropDownSection } from './DropDownSection';
import { FooterNav } from './FooterNav';

export const Footer = () => {

  return (
    <div className="flex flex-col font-open-sans">
      <DropDownSection />
      <FooterNav />
      <div className='w-full py-6 flex flex-col items-center text-[10px] gap-6 text-center [&>*]:max-w-[720px] [&>*]:mx-6 [&>*]:leading-4 [&>*]:xs:mx-auto'>
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
      </div>

    </div>
  )
}
