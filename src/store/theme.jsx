import { createSlice } from "@reduxjs/toolkit";

let initialThemeState;
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  initialThemeState = true;
} else {
  initialThemeState = false;
}

const ThemeSlice = createSlice({
  name: "ThemeSlice",
  initialState: { dark: initialThemeState },
  reducers: {
    toggle: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const themeActions = ThemeSlice.actions;

export default ThemeSlice;

export const setTheme = (isDark) => {
  return () => {
    if (isDark) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };
};
