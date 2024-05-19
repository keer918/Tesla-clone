import { ISection } from '@/interfaces';
import { createContext } from 'react';

interface ContextProps {
  sectionDisplay: ISection | null;
  
  onSectionDisplay: (section: ISection) => void;
}

export const UIContext = createContext({} as ContextProps);