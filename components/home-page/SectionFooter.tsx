import { ReactNode } from 'react';

export const HomeSectionFooter = ({ children }: { children: ReactNode }) => {
  return (
    <footer className="flex flex-1 flex-col justify-end pb-4">
      {children}
    </footer>
  );
};