'use client';

import { FC, ReactNode, useReducer } from 'react';
import { ISection } from '@/interfaces';
import { uiReducer } from './uiReducer';
import { UIContext } from './UIContext';

export interface UIState {
  sectionDisplay: ISection | null;
}

const UI_INITIAL_STATE: UIState = {
  sectionDisplay: null,
};

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const onSectionDisplay = (section: ISection) => {
    dispatch({ type: 'UI-Change section', payload: section });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        onSectionDisplay,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};