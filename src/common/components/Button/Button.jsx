import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'common/components/Text/Text';
import styles from './Button.styles';

const Button = ({ variant, text, onPress }) => {
  return (
    <TouchableOpacity
      type="submit"
      style={styles(variant).button}
      onPress={onPress}
    >
      <Text color={variant === 'warning' ? 'dark' : 'light'} size="large">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: PropTypes.node.isRequired,
  variant: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
