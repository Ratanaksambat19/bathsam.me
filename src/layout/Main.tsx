import React, { PropsWithChildren } from 'react';
import HeadNextSeo from 'components/Layout/HeadSeo';
import { seo } from 'types/interface/seo';
import { SideNav } from 'components/Layout/SideNav';

export default function MainLayout({
  children,
  seo,
  linkTo,
}: PropsWithChildren<{ seo: seo; linkTo: string }>) {
  return (
    <>
      <HeadNextSeo linkTo={linkTo} seo={seo} />
      <div className="flex h-full">
        <SideNav className="flex-grow-0 flex-shrink-0 relative" />
        <div className="h-full overflow-auto m-auto">{children}</div>
      </div>
    </>
  );
}
