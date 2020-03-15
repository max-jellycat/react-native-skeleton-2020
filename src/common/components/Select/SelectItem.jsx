import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';

import Text from 'common/components/Text/Text';
import styles from './SelectItem.styles';

const SelectItem = ({ selected, value, label, onPress }) => {
  return (
    <TouchableWithoutFeedback value={value} onPress={() => onPress(value)}>
      <View style={styles(selected).item}>
        <Text color={selected ? 'light' : 'dark'}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

SelectItem.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SelectItem;
