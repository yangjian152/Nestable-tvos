import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import {View, Image, Text} from 'react-native';
import Style from './Style';
import {Images, Theme} from '../../theme';
import FocusableHighlight from '../../components/focusable/FocusableHighlight';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';

const ProgressBar = ({currentTime, duration}) => {
  return (
    <View style={Style.styles.progress}>
      <Progress.Bar
        progress={currentTime / duration}
        width={500}
        borderWidth={0}
        unfilledColor={Theme.colors.LightGrey}
        color={Theme.colors.Teal}
      />
    </View>
  );
};

export default ProgressBar;
