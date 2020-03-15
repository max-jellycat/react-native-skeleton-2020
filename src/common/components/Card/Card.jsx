import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './Card.styles';

const Card = ({ children, noPadding }) => (
  <View style={styles(noPadding).card}>{children}</View>
);

Card.propTypes = {
  noPadding: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  noPadding: false,
};

export default Card;
