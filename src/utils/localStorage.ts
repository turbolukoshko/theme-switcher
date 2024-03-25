export const getValueFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value !== null ? JSON.parse(value) : value;
};

export const setValueToLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};
