import React, { PropsWithChildren } from 'react';

export const CallOut = ({
  className,
  icon,
  children,
}: PropsWithChildren<{ className?: string; icon?: string }>) => {
  return (
    <div
      className={`${className} px-4 py-4 flex items-baseline space-x-4`}
      id="callOut"
    >
      <p className="text-xl">{icon}</p>
      <p>{children}</p>
    </div>
  );
};
