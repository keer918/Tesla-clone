import { useContext, useState } from 'react';
import { UIContext } from '@/context/ui/UIContext';
import Image from 'next/image';
import charger from '@/public/images/charger.png';
import vehicleAccessories from '@/public/images/vehicleAccessories.png';
import apparel from '@/public/images/apparel.png';
import lifeStyle from '@/public/images/lifeStyle.png';


export const ShopNav = () => {
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
        className={`absolute top-0 z-30  flex w-full animate-fadeIn justify-center bg-white pb-10 pt-28 text-center 
        ${hoverOut && 'animate-fadeOut'}`}
        onMouseLeave={onHoverOut}
      >
        <nav className="flex space-x-[4vw]">
          <a href="#" className="inline-block">
            <Image
              loading="eager"
              width={175}
              height={300}
              src={charger}
              alt="Charging"
            />
            <p>Charging</p>
          </a>
          <a href="#" className="inline-block">
            <Image
              loading="eager"
              width={175}
              height={300}
              src={vehicleAccessories}
              alt="Vehicle accesories"
            />
            <p>Vehicle Accesories</p>
          </a>
          <a href="#" className="inline-block">
            <Image
              loading="eager"
              width={175}
              height={300}
              src={apparel}
              alt="Apparel"
            />
            <p>Apparel</p>
          </a>
          <a href="#" className="inline-block">
            <Image
              loading="eager"
              width={175}
              height={300}
              src={lifeStyle}
              alt="Lifestyle"
            />
            <p>Lifestyle</p>
          </a>
        </nav>
      </section>

      <div className="flex-1 backdrop-blur" />
    </div>
  );
};