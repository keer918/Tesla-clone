'use client';

import { useContext } from 'react';
import { UIContext } from '@/context/ui/UIContext';
import { ISection } from '../../interfaces';

export const HeaderMidLi = ({
  section,
  text,
}: {
  section: ISection;
  text: string;
}) => {
  const { sectionDisplay, onSectionDisplay } = useContext(UIContext);
  return (
    <li>
      <a
        href="#"
        className={`${sectionDisplay === section && 'bg-gray-100 text-black'}`}
        onMouseOver={() => onSectionDisplay(section)}
      >
        {text}
      </a>
    </li>
  );
};