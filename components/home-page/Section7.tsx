import { ButtonDark } from '../ui/ButtonDark';
import { ButtonSoft } from '../ui/ButtonSoft';
import { HomeSectionComponent } from './SectionComponent';
import { HomeSectionFooter } from './SectionFooter';
import { HomeSectionHeader } from './SectionHeader';
import solarRoof from '@/public/images/solarRoof.png';

export const HomeSection7 = () => {
  return (
    <HomeSectionComponent srcUrl={solarRoof} type={'image'} mainColor="black">
      <HomeSectionHeader>
        <h2 className="text-5xl font-medium mb-3">Solar Roof</h2>
        <p className="text-sm">Produce Clean Energy From Your Roof</p>
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