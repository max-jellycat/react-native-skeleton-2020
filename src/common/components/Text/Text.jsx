import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './Text.styles';

const StyledText = ({ color, isUppercase, isBold, size, children }) => (
  <Text style={styles(color, size, isUppercase, isBold).text}>{children}</Text>
);

StyledText.propTypes = {
  color: PropTypes.string,
  isUppercase: PropTypes.bool,
  isBold: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
};

StyledText.defaultProps = {
  color: 'dark',
  isUppercase: false,
  isBold: false,
  size: 'default',
};

export default StyledText;
