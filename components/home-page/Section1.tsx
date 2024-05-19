import { ButtonDark } from '../ui/ButtonDark';
import { ButtonSoft } from '../ui/ButtonSoft';
import { HomeSectionComponent } from './SectionComponent';
import { HomeSectionFooter } from './SectionFooter';
import { HomeSectionHeader } from './SectionHeader';

export const HomeSection1 = () => {
  return (
    <HomeSectionComponent srcUrl={'/videos/tesla-video-1.webm'} type={'video'}>
      <HomeSectionHeader>
        <h2 className="text-5xl font-medium mb-1">Model Y</h2>
        <p className="text-xl">Lease starting at $399/mo*</p>
      </HomeSectionHeader>
      <HomeSectionFooter>
        <div className="gap-8 [&>a]:mx-4 [&>a]:my-8 [&>a]:inline-block [&>a]:px-24 [&>a]:py-3">
          <ButtonDark>Order Now</ButtonDark>
          <ButtonSoft>Demo Drive</ButtonSoft>
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