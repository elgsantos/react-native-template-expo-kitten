import React, { useState } from "react";
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";

import { ThemeContext } from './src/contexts/theme-context';
import themes from './src/resources/themes';

import Routes from "./src/routes";

const App = () => {
  const [themeName, setThemeName] = useState("light");
  const theme = themes[themeName].theme;

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={theme}>
          <Routes />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;