import { ButtonDark } from '../ui/ButtonDark';
import { ButtonSoft } from '../ui/ButtonSoft';
import { HomeSectionComponent } from './SectionComponent';
import { HomeSectionFooter } from './SectionFooter';
import { HomeSectionHeader } from './SectionHeader';
import modelSDesktop from '@/public/images/modelSDesktop.png';

export const HomeSection4 = () => {
  return (
    <HomeSectionComponent
      srcUrl={modelSDesktop}
      type={'image'}
      mainColor="black"
    >
      <HomeSectionHeader>
        <h2 className="mb-1 text-5xl font-medium">Model S</h2>
        <p className="text-xl">From $71,090*</p>
        <p className="text-xs">After Est. Gas Savings</p>
      </HomeSectionHeader>
      <HomeSectionFooter>
        <div className="gap-8 [&>a]:mx-4 [&>a]:my-8 [&>a]:inline-block [&>a]:px-24 [&>a]:py-3">
          <ButtonSoft>Order Now</ButtonSoft>
          <ButtonDark>Demo Drive</ButtonDark>
        </div>
        <div className="text-xs text-black">
          <div>
            *Price before savings is $74,990, excluding taxes and fees. Subject
            to change.
          </div>
          <a href="#" className="underline">
            {' '}
            Learn about est. gas savings.
          </a>
        </div>
      </HomeSectionFooter>
    </HomeSectionComponent>
  );
};