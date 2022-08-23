import React, { useState } from 'react';
import Image from 'next/image';
import {
  IoSearchSharp,
  IoCaretForwardSharp,
  IoCaretDownSharp,
} from 'react-icons/io5';
import {
  HiOutlineArrowsExpand,
  HiOutlineChevronDoubleLeft,
} from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import DarkMode from 'components/DarkMode';
import { navBtns } from 'constants/navBtns';

type BtnState = {
  [key: string]: boolean;
};

export const SideNav = ({
  className,
  handleOpenNav,
  isOpen,
}: {
  className?: string;
  handleOpenNav: (params: boolean) => void;
  isOpen: boolean;
}) => {
  const initialBtnState: BtnState = {};
  for (let i = 0; i <= navBtns.length - 1; i++) {
    initialBtnState[navBtns[i].id] = false;
  }

  const [activeChild, setActiveChild] = useState<BtnState>(initialBtnState);

  const handleSetActiveChild = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.value;
    setActiveChild({
      ...activeChild,
      [id]: !activeChild[id],
    });
  };
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
        className={`h-full space-y-4 py-4 absolute w-[240px] top-0 overflow-hidden
        ${
          isOpen
            ? 'left-0 transition-all duration-200 ease-linear'
            : 'left-[-240px] transition-all duration-200 ease-linear'
        }
        ${className}
        `}
      >
        <button
          type="button"
          className="flex justify-end w-full px-4"
          onClick={() => handleOpenNav(false)}
        >
          <HiOutlineChevronDoubleLeft className="text-text-LM" />
        </button>
        <nav className={`px-4 h-full space-y-4 `}>
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
          <ul className="ml-2">
            <li className="flex items-center space-x-4 text-text-LM">
              <IoSearchSharp />
              <span>Quick Find</span>
            </li>
            <li className="flex items-center space-x-4 text-text-LM">
              <DarkMode />
            </li>
          </ul>
          <ul className="space-y-1">
            <small className="text-text-LM">FAVORITE</small>
            <li>
              <Link href="/">
                <a className="flex w-full px-1">👾 About me</a>
              </Link>
            </li>
          </ul>
          <ul className="space-y-1">
            <small className="text-text-LM">CATEGORIES</small>
            {navBtns.map((btn) => (
              <li key={btn.id}>
                <Link href={btn.linkTo}>
                  <a
                    className="w-full flex px-1 rounded-sm"
                    {...(activeChild[btn.id] && { id: 'clickedBtn' })}
                  >
                    {btn.children.length !== 0 && (
                      <button
                        value={btn.id}
                        onClick={(e) => handleSetActiveChild(e)}
                      >
                        {activeChild[btn.id] ? (
                          <IoCaretDownSharp className="inline-block text-text-LM" />
                        ) : (
                          <IoCaretForwardSharp className="inline-block text-text-LM" />
                        )}
                        <span className="ml-1">{btn.title}</span>
                      </button>
                    )}
                  </a>
                </Link>
                {activeChild[btn.id] && btn.children.length !== 0 && (
                  <ul className="ml-4">
                    {btn.children.map((childBtn) => (
                      <li key={childBtn.id}>
                        <span className="text-xl">•</span>
                        <span className="ml-2">{childBtn.title}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </>
  );
};
