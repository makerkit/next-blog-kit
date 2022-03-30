const THEME_LOCAL_STORAGE_KEY = `theme`;

export const DARK_THEME_CLASSNAME = `dark`;

export function loadThemeFromLocalStorage() {
  return localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
}

export function setTheme(theme: string | null) {
  const root = getHtml();

  if (theme) {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
    root.classList.add(theme);
  } else {
    localStorage.removeItem(THEME_LOCAL_STORAGE_KEY);
    root.classList.remove(DARK_THEME_CLASSNAME);
  }
}

export function loadSelectedTheme() {
  setTheme(loadThemeFromLocalStorage());
}

function getHtml() {
  return document.firstElementChild as HTMLHtmlElement;
}
