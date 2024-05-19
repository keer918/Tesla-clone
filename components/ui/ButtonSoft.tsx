import { ReactNode } from 'react';

export const ButtonSoft = ({ children }: { children: ReactNode }) => {
  return (
    <a
      href="#"
      className="rounded bg-info-alt text-sm font-medium text-black backdrop-blur"
    >
      {children}
    </a>
  );
};