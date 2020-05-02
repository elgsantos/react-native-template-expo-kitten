import React from 'react';
import { Button, Icon } from '@ui-kitten/components';

const renderIcon = ({ name, style }) => (
  <Icon {...style} name={name} />
);

const ButtonWithIcon = ({
  accessibilityRole,
  accessibilityLabel,
  icon,
  iconStyle,
  onPress,
  text,
  style,
}) => {
  const ButtonIcon = () => renderIcon({ name: icon, style: iconStyle });
  return (
    <Button
      style={style}
      icon={ButtonIcon}
      onPress={onPress}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
    >
      {text}
    </Button>
  );
};

export default ButtonWithIcon;