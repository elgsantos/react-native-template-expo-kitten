import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { ThemeContext } from '../../../contexts/theme-context';
import themes from '../../../resources/themes';
import ButtonWithIcon from '../../buttons/ButtonWithIcon';

const ToggleThemeButton = () => {
  const themeContext = React.useContext(ThemeContext);
  const inverseThemeName = theme => theme === "light" ? "dark" : "light";
  const [themeName, setThemeName] = useState(inverseThemeName(themeContext.theme));
  const [themeButtonText, setthemeButtonText] = useState('DARK');
  const [themeButtonIcon, setthemeButtonIcon] = useState('moon');

  const changeTheme = () => {
    themeContext.toggleTheme();
    setThemeName(inverseThemeName(themeName));
  };

  useEffect(() => {
    const { text, icon } = themeName === "light" ? themes.dark : themes.light;
    setthemeButtonIcon(icon);
    setthemeButtonText(text);
  });

  return (
    <ButtonWithIcon
      accessibilityRole="button"
      accessibilityLabel="UI Kitten Change Theme"
      style={styles.iconButton}
      text={`SWITCH TO ${themeButtonText} THEME`}
      icon={themeButtonIcon}
      onPress={changeTheme}
      iconStyle={{ tintColor: "white" }}
    />
  )
}

export default ToggleThemeButton;

const styles = StyleSheet.create({
  iconButton: {
    marginVertical: 16,
  },
});