import { useContext, useState } from 'react';
import { UIContext } from '@/context/ui/UIContext';
import Image from 'next/image';

import modelS from '@/public/images/modelS.png';
import model3 from '@/public/images/model3.png';
import modelX from '@/public/images/modelX.png';
import modelY from '@/public/images/modelY.png';
import modelDuo from '@/public/images/modelDuo.png';

export const VehiclesNav = () => {
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
      <nav
        className={`absolute top-0 z-30 grid w-full animate-fadeIn grid-cols-3 bg-white pb-10 pt-28 
        ${hoverOut && 'animate-fadeOut'}`}
        onMouseLeave={onHoverOut}
      >
        <ul className="col-span-2 flex flex-wrap gap-4 pl-[10vw] ">
          <li className="text-center">
            <Image
              loading="eager"
              width={175}
              height={300}
              src={modelS}
              alt="Model S car"
            />
            <h3>Model S</h3>
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
              src={model3}
              alt="Model 3 car"
            />
            <h3>Model 3</h3>
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
              src={modelX}
              alt="Model X car"
            />
            <h3>Model X</h3>
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
              src={modelY}
              alt="Model Y car"
            />
            <h3>Model Y</h3>
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
              src={modelDuo}
              alt="Help me choose photo"
            />
            <h3>Help me choose</h3>
            <p>
              <a href="#" className="inline-block text-sm font-thin underline">
                Get stated
              </a>
            </p>
          </li>
        </ul>
        <nav className="border-info-alt border-l-2 pl-12 text-sm font-medium">
          <ul className="space-y-2 [&>li>a]:inline-block">
            <li>
              <a href="#">Inventory</a>
            </li>
            <li>
              <a href="#">Used Cars</a>
            </li>
            <li>
              <a href="#">Demo Drive</a>
            </li>
            <li>
              <a href="#">Trade in</a>
            </li>
            <li>
              <a href="#">Help Me Choose</a>
            </li>
            <li>
              <a href="#">Compare</a>
            </li>
            <li>
              <a href="#">Fleet</a>
            </li>
            <li>
              <a href="#">Cybertruck</a>
            </li>
            <li>
              <a href="#">Semi</a>
            </li>
            <li>
              <a href="#">Roadster</a>
            </li>
          </ul>
        </nav>
      </nav>
      <div className="flex-1 backdrop-blur" />
    </div>
  );
};