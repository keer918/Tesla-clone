import { ButtonDark } from '../ui/ButtonDark';
import { ButtonSoft } from '../ui/ButtonSoft';
import { HomeSectionComponent } from './SectionComponent';
import { HomeSectionFooter } from './SectionFooter';
import { HomeSectionHeader } from './SectionHeader';
import solarpanels from '@/public/images/solarpanels.png';

export const HomeSection6 = () => {
  return (
    <HomeSectionComponent srcUrl={solarpanels} type={'image'} mainColor="black">
      <HomeSectionHeader>
        <h2 className="text-5xl font-medium mb-3">Solar Panels</h2>
        <a className="inline-block text-sm underline">Schedule a Virtual Consultation</a>
      </HomeSectionHeader>
      <HomeSectionFooter>
        <div className="gap-8 [&>a]:mx-4 [&>a]:my-16 [&>a]:inline-block [&>a]:px-24 [&>a]:py-3">
          <ButtonSoft>Order Now</ButtonSoft>
          <ButtonDark>Learn More</ButtonDark>
        </div>
      </HomeSectionFooter>
    </HomeSectionComponent>
  );
};