import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
} from "react-native";

import PropTypes from 'prop-types';


const CustomView = (props) => {
    const { children, hide, style } = props;
    if (hide) {
      return null;
    }
    return (
      <View {...this.props} style={style}>
        { children }
      </View>
    );
  };


  CustomView.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
      ])),
    ]).isRequired,
    hide: PropTypes.bool,
  };

export default CustomView;
