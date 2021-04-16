import React from 'react';
import _ from 'lodash';
import {View, Text} from 'react-native';
import Style from './Style';

const Timeline = ({currentTime, duration}) => {
  const formatSeconds = (seconds = 0) => {
    const s = Math.min(Math.max(seconds, 0), duration);
    const minutes = s / 60;
    const remainSeconds = s % 60;
    return `${_(minutes.toFixed(0), 2, 0)}:${_.padStart(
      remainSeconds.toFixed(0),
      2,
      0,
    )}`;
  };
  return (
    <View style={Style.styles.timeline}>
      <Text style={Style.styles.timelineText}>
        {formatSeconds(currentTime)} / {formatSeconds(duration)}
      </Text>
    </View>
  );
};

export default Timeline;
