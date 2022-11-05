import React, { PropsWithChildren, useEffect, useState } from 'react';
import HeadNextSeo from 'components/Layout/HeadSeo';
import { seo } from 'types/interface/seo';
import { SideNav } from 'components/Layout/SideNav';

export default function MainLayout({
  children,
  seo,
  linkTo,
}: PropsWithChildren<{ seo: seo; linkTo: string }>) {
  const [openNav, setOpenNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', onResize);

    if (isMobile) {
      setOpenNav(false);
    }

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [isMobile]);

  return (
    <>
      <HeadNextSeo linkTo={linkTo} seo={seo} />
      <div className="flex w-full h-full relative overflow-hidden">
        <SideNav
          handleOpenNav={setOpenNav}
          isOpen={openNav}
          className="flex-grow-0 z-30 flex-shrink-0 relative"
        />
        <div
          className={`h-full w-full m-auto bottom-0 overflow-auto absolute ${
            openNav
              ? 'left-[240px] md:left-[240px] lg:left-[100px] transition-all duration-200 ease-linear'
              : 'left-[0px] transition-all duration-200 ease-linear'
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
