import React from 'react';
import Image from 'next/image';
import { IoSearchSharp, IoCaretForwardSharp } from 'react-icons/io5';
import {
  HiOutlineArrowsExpand,
  HiOutlineChevronDoubleLeft,
} from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import DarkMode from 'components/DarkMode';

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
                <a>👾 About me</a>
              </Link>
            </li>
          </ul>
          <ul className="space-y-1">
            <small className="text-text-LM">CATEGORIES</small>
            <li>
              <Link href="/about">
                <a>
                  <IoCaretForwardSharp className="inline-block text-text-LM" />
                  <span className="ml-1">📝 Blogs</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>
                  <IoCaretForwardSharp className="inline-block text-text-LM" />
                  <span className="ml-1">🗒 Daily logs</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>
                  <IoCaretForwardSharp className="inline-block text-text-LM" />
                  <span className="ml-1">📂 Projects</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>
                  <IoCaretForwardSharp className="inline-block text-text-LM" />
                  <span className="ml-1">🚲 My Journey</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </nav>
    </>
  );
};
