import React, { Component } from 'react';
import { View } from 'react-native';
import {useDimensions, ResponsiveComponent} from 'react-native-responsive-ui';
import styles from './styles';
import {currentSize} from './utils';

class Col extends ResponsiveComponent {
  
  constructor(props) {
    super(props);
  }

  render() {
    const {children, style} = this.props;
    const {width} = this.props.state.window;

    const size = this.props[widthToSize(width)];
        
    var columns = 'col_' + size;

    return (
      <View style={[styles[columns],style]}>
        { children }
      </View>
    );
  }
}

export default Col;
