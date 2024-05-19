import { ButtonDark } from '../ui/ButtonDark';
import { ButtonSoft } from '../ui/ButtonSoft';
import { HomeSectionComponent } from './SectionComponent';
import { HomeSectionFooter } from './SectionFooter';
import { HomeSectionHeader } from './SectionHeader';
import powerWall from '@/public/images/powerWall.png';

export const HomeSection8 = () => {
  return (
    <HomeSectionComponent srcUrl={powerWall} type={'image'} mainColor='black'>
      <HomeSectionHeader>
        <h2 className="text-5xl mt-4 font-medium">Powerwall</h2>
      </HomeSectionHeader>
      <HomeSectionFooter>
        <div className="gap-8 [&>a]:mx-4 [&>a]:my-8 [&>a]:inline-block [&>a]:px-24 [&>a]:py-3">
          <ButtonSoft>Order Now</ButtonSoft>
          <ButtonDark>Learn More</ButtonDark>
        </div>
      
      </HomeSectionFooter>
    </HomeSectionComponent>
  );
};