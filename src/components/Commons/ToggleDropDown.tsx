import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { INavBtn } from 'types/interface/navBtns';
export const ToggleDropDown = ({ navBtns }: { navBtns: INavBtn[] }) => {
  const [activeChild, setActiveChild] = useState(navBtns);
  const [activePage, setActivePage] = useState('/');
  const handleSetActiveChild = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const id = e.currentTarget.value;
      setActiveChild((prevChild) => {
        return [
          ...prevChild.map((child) => {
            if (child.id === id) {
              return {
                ...child,
                isActive: !child.isActive,
              };
            }
            return child;
          }),
        ];
      });
    },
    []
  );

  const handleSetActivePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const page = e.currentTarget.value;
    setActivePage(page);
  };

  return (
    <ul style={{ listStyle: 'none' }} className="space-y-1">
      {activeChild.map((btn) => (
        <li
          key={btn.id}
          {...(activePage === btn.linkTo && { id: 'clickedBtn' })}
        >
          {btn.level === 0 ? (
            <>
              <div
                className="w-full flex px-1 rounded-sm"
                {...(activePage === btn.linkTo &&
                  btn.isActive && { id: 'clickedBtn' })}
              >
                <button value={btn.id} onClick={handleSetActiveChild}>
                  {btn.isActive ? (
                    <FiChevronDown className="inline-block text-text-LM" />
                  ) : (
                    <FiChevronUp className="inline-block text-text-LM" />
                  )}
                </button>
                <Link href={btn.linkTo}>
                  <a>
                    <button
                      value={btn.linkTo}
                      onClick={handleSetActivePage}
                      className="ml-1"
                    >
                      {btn.title}
                    </button>
                  </a>
                </Link>
              </div>
              {btn.isActive && (
                <>
                  {btn.children.length !== 0 ? (
                    <ToggleDropDown navBtns={btn.children} />
                  ) : (
                    <div className="ml-4">
                      <span className="text-xl"></span>
                      <span className="ml-2">No pages inside</span>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            // btn.isActive && (
            <div className="ml-4">
              <li key={btn.id}>
                <span className="text-xl">•</span>
                <span className="ml-2">{btn.title}</span>
              </li>
            </div>
            // )
          )}
        </li>
      ))}
    </ul>
  );
};
