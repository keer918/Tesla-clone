import { ReactNode } from 'react';

export const ButtonTransparent = ({ children }: { children: ReactNode }) => {
  return (
    <a
      href="#"
      className="rounded bg-transparent text-sm font-medium text-white border-white border-2"
    >
      {children}
    </a>
  );
};