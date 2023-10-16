import { createContext, useReducer, useEffect, useMemo } from "react";

export const ThemeProvider = createContext();

function stateFromLocalStorage() {
  return (
    JSON.parse(localStorage.getItem("state")) || {
      theme: "dark",
    }
  );
}

const updateState = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
export function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(updateState, stateFromLocalStorage());

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const changeTheme = (theme) => {
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };

  const newState = useMemo(() => {
    return state;
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(newState));
    document.documentElement.setAttribute(
      "data-theme",
      stateFromLocalStorage().theme
    );
  }, [newState]);

  return (
    <ThemeProvider.Provider value={{ ...state, changeColor, changeTheme }}>
      {children}
    </ThemeProvider.Provider>
  );
}
