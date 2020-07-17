import React from 'react';
import { View } from 'react-native';
import { ResponsiveComponent, ResponsiveStyleSheet } from 'react-native-responsive-ui';
import styles from './styles';
import {widthToSize} from './utils';

class Col extends ResponsiveComponent {
  
  constructor(props) {
    super(props); 
  }

  render() {
    const {children, style} = this.props;

    const width = this.getWidth();

    const size = this.props[widthToSize(width)];

    var columns = 'col_' + size;

    const styleResp = this.style[columns];

    return (
      <View style={[styleResp,style]}>
        { children }
      </View>
    );
  };

  getWidth() {
    if (this.state.screen) {
      return this.state.screen.width;
    } else {
      return this.state.window.width;
    }
  }

  get style() {
    return ResponsiveStyleSheet.select(
      styles
    );
  };
}

export default Col;
