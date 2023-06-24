export const setLocalStorage = (key: string, data: string) => {
    localStorage.setItem(key, data);
};
export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
};
