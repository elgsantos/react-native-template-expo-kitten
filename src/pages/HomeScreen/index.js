import React, { useState } from 'react';
import { StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import heartIcons from '../../resources/heartIcons';
import { Layout, Button, Text } from '@ui-kitten/components';
import NavigationBar from '../../components/layout/header/NavigationBar';
import ToggleThemeButton from '../../components/buttons/ToggleThemeButton';

export const HomeScreen = (props) => {

  const [icon, setIcon] = useState(heartIcons[0]);

  const changeIcon = () => {
    const index = Math.floor(Math.random() * heartIcons.length);
    setIcon(heartIcons[index]);
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <NavigationBar {...props} />
        <Layout style={styles.container}>
          <Text style={styles.text} category="h1">
            We
              <Text style={styles.text} category="h1"
              accessibilityRole="button"
              accessibilityLabel="Change Icon"
              onPress={changeIcon}
            >
              {icon}
            </Text>
              React Native + UI Kitten
          </Text>
          <Text style={styles.text} category="s1">
            Run this template in the browser and as a native app with expo!
          </Text>
          <Button
            accessibilityRole="button"
            accessibilityLabel="Change Icon"
            style={styles.iconButton}
            onPress={changeIcon}
          >
            CHANGE ICON
          </Button>
          <Text style={styles.text} category="s1">
            Template created by
            
          </Text>
          <Text style={styles.link}
              onPress={() => Linking.openURL('https://github.com/elgsantos')}>
              https://github.com/elgsantos
          </Text>
        </Layout>
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  safeAreaView: {
    flex: 1
  },
  text: {
    textAlign: "center",
  },
  link: {
    textAlign: "center",
    textDecorationLine: "underline",
  },
  iconButton: {
    marginVertical: 16,
  },
});
