import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import theme from 'styles';
import styles from './InputField.styles';

const InputField = ({ value, placeholder, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderColor={theme.colors.greyLighter}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default InputField;
