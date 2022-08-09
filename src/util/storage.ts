export const getLocalStorage = (key: string) => {
  return typeof window !== 'undefined' && localStorage.getItem(key);
};

export const setLocalStorage = (key: string, value: string) => {
  if (typeof window !== undefined) {
    localStorage.setItem(key, value);
  }
};
