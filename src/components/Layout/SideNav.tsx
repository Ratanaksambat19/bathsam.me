import React from 'react';
import Image from 'next/image';
import { IoSearchSharp } from 'react-icons/io5';
import {
  HiOutlineArrowsExpand,
  HiOutlineChevronDoubleLeft,
} from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import DarkMode from 'components/DarkMode';
import { navBtns } from 'constants/navBtns';
import cx from 'classnames';
import { ToggleDropDown } from 'components/Commons';

export const SideNav = ({
  className,
  handleOpenNav,
  isOpen,
}: {
  className?: string;
  handleOpenNav: (params: boolean) => void;
  isOpen: boolean;
}) => {
  return (
    <>
      {!isOpen && (
        <button
          className="h-fit py-4 px-4 absolute z-50"
          type="button"
          onClick={() => handleOpenNav(true)}
        >
          <AiOutlineMenu className="text-text-LM" />
        </button>
      )}
      <nav
        className={cx(
          'h-full space-y-4 py-4 absolute w-[240px] top-0 overflow-hidden',
          isOpen
            ? 'left-0 transition-all duration-200 ease-linear'
            : 'left-[-240px] transition-all duration-200 ease-linear',
          className
        )}
      >
        <button
          type="button"
          className="flex justify-end w-full px-4"
          onClick={() => handleOpenNav(false)}
        >
          <HiOutlineChevronDoubleLeft className="text-text-LM" />
        </button>
        <div className="px-4 h-full space-y-4">
          <div className="flex items-center space-x-2">
            <Image
              className=""
              src="/assets/personal/memoji/like.png"
              alt="like memoji"
              height={30}
              width={30}
            />
            <span className="">Ratanaksambat</span>
            <HiOutlineArrowsExpand className="text-text-LM" />
          </div>
          <div className="ml-2">
            <div className="flex items-center space-x-4 text-text-LM">
              <IoSearchSharp />
              <span>Quick Find</span>
            </div>
            <div className="flex items-center space-x-4 text-text-LM">
              <DarkMode />
            </div>
          </div>
          <ToggleDropDown navBtns={navBtns} />
        </div>
        <small className="text-center w-full absolute bottom-2">
          Highly inspired by{' '}
          <a href="https://www.notion.so/" target="blank">
            @Notion
          </a>
        </small>
      </nav>
    </>
  );
};
