import { ISection } from '@/interfaces';
import { UIState } from './UIProvider';

type UIActionType = { type: 'UI-Change section'; payload: ISection | null };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI-Change section':
      return {
        ...state,
        sectionDisplay: action.payload,
      };
    default:
      return state;
  }
};