import React, { ChangeEventHandler } from 'react';
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

if (defaultDark) {
  setDark();
}
const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};
const DarkMode = () => {
  return (
    <div className={styles.toggleThemeWrapper}>
      <span>☀️</span>
      <label className={styles.toggleTheme} htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className={`${styles.slider} ${styles.round}`} />
      </label>
      <span>🌒</span>
    </div>
  );
};

export default DarkMode;
