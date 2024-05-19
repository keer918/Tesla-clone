import { ReactNode } from 'react';

export const ButtonDark = ({
  children,
  href = '#',
}: {
  children: ReactNode;
  href?: string;
}) => {
  return (
    <a
      href={href}
      className="inline-block rounded bg-info text-white text-sm font-medium backdrop-blur"
    >
      {children}
    </a>
  );
};