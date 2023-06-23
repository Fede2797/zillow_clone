import { DropDownSection } from './DropDownSection';
import { FooterImage } from './FooterImage';
import { FooterInfo } from './FooterInfo';
import { FooterNav } from './FooterNav';

export const Footer = () => {

  return (
    <div className="flex flex-col font-open-sans">
      <DropDownSection />
      <FooterNav />
      <FooterInfo />
      <FooterImage />
    </div>
  )
}
