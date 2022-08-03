import React, { PropsWithChildren } from 'react';

export const Quote = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={`${className} border-l-2 pl-6 text-lg`}>{children}</div>
  );
};
