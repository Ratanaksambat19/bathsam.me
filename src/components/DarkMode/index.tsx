import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { setLocalStorage, getLocalStorage } from 'util/storage';
import styles from './styles.module.css';

const setDark = () => {
  setLocalStorage('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
};

const setLight = () => {
  setLocalStorage('theme', 'light');
  document.documentElement.setAttribute('data-theme', 'light');
};

const storedTheme = getLocalStorage('theme');

const prefersDark =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const defaultDark =
  storedTheme === 'dark' || (storedTheme === null && prefersDark);

const DarkMode = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  console.log(isCheck);

  if (isCheck) {
    setDark();
  }

  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('gg');

    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
    setIsCheck(e.target.checked);
  };

  useEffect(() => {
    setIsCheck(defaultDark);
  }, []);

  return (
    <div className={`${styles.toggleThemeWrapper} space-x-2`}>
      <span>🌞</span>
      <label className={styles.toggleTheme} htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          name="toggle"
          checked={isCheck}
        />
        <div className={`${styles.slider} ${styles.round}`} />
      </label>
      <span>🌚</span>
    </div>
  );
};

export default DarkMode;
