import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import {ResponsiveComponent} from 'react-native-responsive-ui';

class Row extends ResponsiveComponent {
  
  constructor(props) {
    super(props);
  }

  render() {
    const {children, rowStyles} = this.props;

    return (
      <View style={[styles.row, rowStyles]}>
        { children }
      </View>
    );
  }
}

export default Row;
