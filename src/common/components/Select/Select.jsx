import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './Select.styles';
import SelectItem from './SelectItem';

const Select = ({ options, defaultValue, onChange }) => {
  return (
    <View style={styles.select}>
      {options.map((item, index) => (
        <SelectItem
          key={`selectItem-${index}`}
          value={item.value}
          label={item.label}
          selected={defaultValue === item.value}
          onPress={onChange}
        />
      ))}
    </View>
  );
};

Select.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
