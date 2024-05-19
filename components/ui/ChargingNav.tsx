import { useContext, useState } from 'react';
import { UIContext } from '@/context/ui/UIContext';
import Image from 'next/image';
import charging from '@/public/images/charging.png';
import homeCharging from '@/public/images/homeCharging.png';
import superCharging from '@/public/images/superCharging.png';

export const CharginNav = () => {
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
        <ul className="col-span-2 flex flex-wrap gap-4 space-x-4 pl-[20vw]">
          <li className="text-center">
            <Image
              loading="eager"
              width={175}
              height={300}
              src={charging}
              alt="Charger"
            />
            <h3>Charging</h3>
            <p>
              <a
                href="#"
                className="mr-4 inline-block text-sm font-thin underline"
              >
                Learn
              </a>
              <a href="#" className="inline-block text-sm font-thin underline">
                Order
              </a>
            </p>
          </li>
          <li className="text-center">
            <Image
              loading="eager"
              width={175}
              height={300}
              src={homeCharging}
              alt="Home charging"
            />
            <h3>Home Charging</h3>
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
              height={300}
              src={superCharging}
              alt="Super Charging"
            />
            <h3>Super Charging</h3>
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
              <a href="#">Charging calculator</a>
            </li>
            <li>
              <a href="#">Trip Planner</a>
            </li>
            <li>
              <a href="#">Supercharge Voting</a>
            </li>
            <li>
              <a href="#">Host a Supercharger</a>
            </li>
            <li>
              <a href="#">Commercial Charging</a>
            </li>
            <li>
              <a href="#">Host Wall Conectors</a>
            </li>
          </ul>
        </nav>
      </section>

      <div className="flex-1 backdrop-blur" />
    </div>
  );
};