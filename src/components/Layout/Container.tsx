import React, { PropsWithChildren } from 'react';

export const Container = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={`${className} px-8 sm:px-0 sm:max-w-[550px] md:max-w-[650px] lg:max-w-[800px] m-auto space-y-12 py-24`}
    >
      {children}
    </div>
  );
};
