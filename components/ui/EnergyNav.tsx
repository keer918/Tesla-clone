
import { useContext, useState } from 'react';
import { UIContext } from '@/context/ui/UIContext';
import Image from 'next/image';
import solarPanelsmega from '@/public/images/solarPanelsmega.png';
import solarRoofmega from '@/public/images/solarRoofmega.png';
import powerWallmega from '@/public/images/powerWallmega.png';
import megaPack from '@/public/images/megaPack.png';

export const EnergyNav = () => {
  const { onSectionDisplay } = useContext(UIContext);
  const [hoverOut, setHoverOut] = useState(false);

  const onHoverOut = () => {
    setHoverOut(true);

    setTimeout(() => {
      onSectionDisplay(null);
      setHoverOut(false);
    }, 300);
  };

  return (
    <div className="absolute top-0 z-30 flex h-screen w-screen">
      <section
        className={`absolute top-0 z-30 grid w-full animate-fadeIn grid-cols-3 bg-white pb-10 pt-28 
        ${hoverOut && 'animate-fadeOut'}`}
        onMouseLeave={onHoverOut}
      >
        <ul className="col-span-2 flex flex-wrap gap-4 pl-[10vw] ">
          <li className="text-center">
            <Image
              loading="eager"
              width={175}
              height={250}
              className="object-cover"
              src={solarPanelsmega}
              alt="Solar panels"
            />
            <h3>Energy</h3>
            <p>
              <a
                href="#"
                className="mr-4 inline-block text-sm font-thin underline"
              >
                Learn
              </a>
              <a href="#" className="inline-block  text-sm font-thin underline">
                Order
              </a>
            </p>
          </li>
          <li className="text-center">
            <Image
              loading="eager"
              width={175}
              height={250}
              className="object-cover"
              src={solarRoofmega}
              alt="Solar Roof"
            />
            <h3>Solar Roof</h3>
            <p>
              <a
                href="#"
                className="mr-4 inline-block text-sm font-thin underline"
              >
                Learn
              </a>
              <a href="#" className="inline-block  text-sm font-thin underline">
                Order
              </a>
            </p>
          </li>
          <li className="text-center">
            <Image
              loading="eager"
              width={175}
              height={250}
              className="object-cover"
              src={powerWallmega}
              alt="Powerwall"
            />
            <h3>PowerWall</h3>
            <p>
              <a
                href="#"
                className="mr-4 inline-block text-sm font-thin underline"
              >
                Learn
              </a>
              <a href="#" className="inline-block  text-sm font-thin underline">
                Order
              </a>
            </p>
          </li>
          <li className="text-center">
            <Image
              loading="eager"
              width={175}
              height={250}
              className="object-cover"
              src={megaPack}
              alt="Megapack"
            />
            <h3>Megapack</h3>
            <p>
              <a
                href="#"
                className="mr-4 inline-block text-sm font-thin underline"
              >
                Learn
              </a>
              <a href="#" className="inline-block  text-sm font-thin underline">
                Order
              </a>
            </p>
          </li>
        </ul>
        <nav className="border-info-alt border-l-2 pl-12 text-sm font-medium">
          <ul className="space-y-2 [&>li>a]:inline-block">
            <li>
              <a href="#">Schedule a Consultation</a>
            </li>
            <li>
              <a href="#">Why Solar</a>
            </li>
            <li>
              <a href="#">Incentives</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Partner with Tesla</a>
            </li>
            <li>
              <a href="#">Commercial</a>
            </li>
            <li>
              <a href="#">Utilities</a>
            </li>
          </ul>
        </nav>
      </section>

      <div className="flex-1 backdrop-blur" />
    </div>
  );
};
