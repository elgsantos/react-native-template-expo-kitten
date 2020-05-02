import React from 'react';

import { Divider, Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const NavigationBar = (props) => {
  const navigateToConfig = () => {
    props.navigation.navigate('Config');
  };

  const SettingsIcon = (props) => (
    <Icon {...props} name='settings' />
  );

  const renderSettingsAction = () => (
    <TopNavigationAction icon={SettingsIcon} onPress={navigateToConfig} />
  );

  return (
    <>
      <TopNavigation
        title='React Native Expo Kitten Template'
        alignment='center'
        rightControls={renderSettingsAction()}
      />
      <Divider />
    </>
  );
}

export default NavigationBar;