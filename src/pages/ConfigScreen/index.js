import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

import ToggleThemeButton from '../../components/buttons/ToggleThemeButton';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const ConfigScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TopNavigation title='Configuration' alignment='center' leftControl={BackAction()} />
      <Divider />
      <Layout style={styles.layout}>
        <Avatar style={styles.avatar} size='large' source={require('../../../assets/icon.png')} />
        <Text>Click the button to change theme</Text>
        <ToggleThemeButton />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  layout: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  }
});