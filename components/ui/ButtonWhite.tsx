import { ReactNode } from 'react';

export const ButtonWhite = ({ children }: { children: ReactNode }) => {
  return (
    <a
      href="#"
      className="rounded bg-white text-sm font-medium text-black backdrop-blur"
    >
      {children}
    </a>
  );
};