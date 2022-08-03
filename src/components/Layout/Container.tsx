import React, { PropsWithChildren } from 'react';

export const Container = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={`${className} lg:max-w-[800px] m-auto space-y-12 mt-24`}>
      {children}
    </div>
  );
};
