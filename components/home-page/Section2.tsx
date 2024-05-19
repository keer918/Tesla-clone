import { ButtonDark } from '../ui/ButtonDark';
import { ButtonSoft } from '../ui/ButtonSoft';
import { HomeSectionComponent } from './SectionComponent';
import { HomeSectionFooter } from './SectionFooter';
import { HomeSectionHeader } from './SectionHeader';

import model3DesktopUrl from '@/public/images/model3DesktopUrl.png';

export const HomeSection2 = () => {
  return (
    <HomeSectionComponent srcUrl={model3DesktopUrl} type={'image'}>
      <HomeSectionHeader>
        <h2 className="text-5xl font-medium mb-1">Model 3</h2>
        <p className="text-xl">Lease starting at $329/mo*</p>
      </HomeSectionHeader>
      <HomeSectionFooter>
        <div className="gap-8 [&>a]:mx-4 [&>a]:my-8 [&>a]:inline-block [&>a]:px-24 [&>a]:py-3">
          <ButtonSoft>Order Now</ButtonSoft>
          <ButtonDark>Demo Drive</ButtonDark>
        </div>
        <div className="text-xs">
          *Excludes taxes and fees with price subject to change. Available in
          select states.
          <a href="#" className="underline">
            {' '}
            See Details
          </a>
        </div>
      </HomeSectionFooter>
    </HomeSectionComponent>
  );
};