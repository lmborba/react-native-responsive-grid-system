import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import {ResponsiveComponent, ResponsiveStyleSheet} from 'react-native-responsive-ui';

class Row extends ResponsiveComponent {
  
  constructor(props) {
    super(props);
  }

  render() {
    const {children, rowStyles} = this.props;

    console.log('style',this.style);
    return (
      <View style={[this.style.row, rowStyles]}>
        { children }
      </View>
    );
  }

  get style() {
    if (!ResponsiveStyleSheet) return {};
    return ResponsiveStyleSheet.select(
      styles
    );
  };
}

export default Row;
