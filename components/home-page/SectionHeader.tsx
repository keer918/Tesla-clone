import React, { ReactNode } from 'react';

export const HomeSectionHeader = ({ children }: { children: ReactNode }) => {
  return <header className="pt-20">{children}</header>;
};