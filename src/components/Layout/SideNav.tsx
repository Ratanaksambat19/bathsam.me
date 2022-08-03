import React from 'react';
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

import Link from 'next/link';
export const SideNav = () => {
  return (
    <nav className="bg-light-gray px-4 h-full space-y-4">
      <button type="button" className="relative w-full">
        <HiOutlineChevronDoubleLeft className="text-text-LM absolute right-0" />
      </button>
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
          <Link href="/about">
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
  );
};
