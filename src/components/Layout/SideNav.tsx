import React, { useState } from 'react';
import Image from 'next/image';
import {
  IoSearchSharp,
  IoSettingsSharp,
  IoCaretForwardSharp,
} from 'react-icons/io5';
import {
  HiOutlineArrowsExpand,
  HiOutlineChevronDoubleLeft,
} from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import style from './SideNav.module.css';

export const SideNav = ({ className }: { className?: string }) => {
  const [showSideNav, setShowSideNav] = useState(true);
  console.log(showSideNav);
  return (
    <>
      {!showSideNav && (
        <button
          className="h-fit py-4 px-4 absolute"
          type="button"
          onClick={() => setShowSideNav(true)}
        >
          <AiOutlineMenu className="text-text-LM" />
        </button>
      )}
      <nav
        className={`h-full space-y-4 py-4 overflow-hidden
        ${style.navWrap} 
        ${!showSideNav && style.hide}
        ${className}
        ${showSideNav ? 'bg-light-gray' : 'bg-white'}`}
      >
        <button
          type="button"
          className="flex justify-end w-full px-4"
          onClick={() => setShowSideNav(false)}
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
              <IoSettingsSharp />
              <span>Settings</span>
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
