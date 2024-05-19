
import { ButtonTransparent } from '../ui/ButtonTransparent';
import { HomeSectionComponent } from './SectionComponent';
import { HomeSectionFooter } from './SectionFooter';
import { HomeSectionHeader } from './SectionHeader';

export const HomeSection5 = () => {
  return (
    <HomeSectionComponent srcUrl={'/videos/demo-video-2.webm'} type={'video'}>
      <HomeSectionHeader>
        <h2 className="mb-2 text-5xl">Experience Tesla</h2>
        <p className="text-sm">Schedule a Demo Drive Today</p>
      </HomeSectionHeader>
      <HomeSectionFooter>
        <div className="gap-8 [&>a]:mx-4 [&>a]:my-16 [&>a]:inline-block [&>a]:px-24 [&>a]:py-2">
          <ButtonTransparent>Demo Drive</ButtonTransparent>
        </div>
      </HomeSectionFooter>
    </HomeSectionComponent>
  );
};