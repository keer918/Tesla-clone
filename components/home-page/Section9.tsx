import { ButtonWhite } from '../ui/ButtonWhite';
import { HomeSectionComponent } from './SectionComponent';
import { HomeSectionFooter } from './SectionFooter';
import { HomeSectionHeader } from './SectionHeader';
import accessories from '@/public/images/accessories.png';

export const HomeSection9 = () => {
  return (
    <HomeSectionComponent srcUrl={accessories} type={'image'} mainColor="black">
      <HomeSectionHeader>
        <h2 className="mt-4 text-5xl font-medium">Accesories</h2>
      </HomeSectionHeader>
      <HomeSectionFooter>
        <div className="gap-8 [&>a]:mx-4 [&>a]:my-8 [&>a]:inline-block [&>a]:px-24 [&>a]:py-3">
          <ButtonWhite>Shop Now</ButtonWhite>
        </div>
        <div className="mb-4 flex justify-center text-xs text-white">
          <div className="flex gap-4">
            <a href="#" className="inline-block">
              Privacy & Legal
            </a>
            <a href="#" className="inline-block">
              Vehicle Recalls
            </a>
            <a href="#" className="inline-block">
              Contact
            </a>
            <a href="#" className="inline-block">
              News
            </a>
            <a href="#" className="inline-block">
              Get Updates
            </a>
            <a href="#" className="inline-block">
              Locations
            </a>
          </div>
        </div>
      </HomeSectionFooter>
    </HomeSectionComponent>
  );
};