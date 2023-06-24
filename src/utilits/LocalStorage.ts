export const setLocalStorage = (key: string, data: string) => {
    localStorage.setItem(key, data);
};
export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
};
export const removeLocalStorage = (key: string) => {
    return localStorage.removeItem(key);
};
