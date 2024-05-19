import Image from 'next/image';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  srcUrl: any;
  type: 'video' | 'image';
  mainColor?: string;
  alt?: string;
}

export const HomeSectionComponent = ({
  children,
  mainColor = 'white',
  type,
  srcUrl,
  alt,
}: Props) => {
  return (
    <section
      className={`landing-section relative h-screen snap-center overflow-hidden text-center 
      ${mainColor && `text-${mainColor}`}`}
      data-main-color={mainColor}
    >
      <div className="relative z-20 flex h-full flex-col">{children}</div>
      <div className="absolute bottom-0 top-0 z-10">
        {type === 'image' ? (
          <div className="h-screen w-screen">
            <Image
              loading="eager"
              fill
              className="object-cover"
              src={srcUrl}
              alt={alt || ''}
            />
          </div>
        ) : (
          <video
            className="h-screen w-screen object-cover"
            autoPlay
            muted
            loop
            src={srcUrl}
          ></video>
        )}
      </div>
    </section>
  );
};