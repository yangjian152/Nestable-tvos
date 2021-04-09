import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import {View, Image, Text} from 'react-native';
import Style from './Style';
import {Images, Theme} from '../../theme';
import FocusableHighlight from '../../components/focusable/FocusableHighlight';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';

const Controller = ({
  focusStatus,
  handleFocus,
  handlePrev,
  handleNext,
  handlePlay,
  paused,
  currentTime,
  duration,
}) => {
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
    <>
      <View style={Style.styles.controller}>
        <View style={Style.styles.buttonGroup}>
          <FocusableHighlight
            nativeID={'component_touchable_highlight'}
            onPress={handlePrev}
            onFocus={() => handleFocus('prev')}
            style={Style.styles.button}
            underlayColor={Style.buttonUnfocusedColor}>
            <Icon
              name="stepbackward"
              color={focusStatus === 'prev' ? Theme.colors.Teal : '#ffffff'}
              size={25}
            />
          </FocusableHighlight>
          <FocusableHighlight
            nativeID={'component_touchable_highlight'}
            onPress={() => handlePlay(!paused)}
            onFocus={() => handleFocus('play')}
            style={Style.styles.button}
            underlayColor={Style.buttonUnfocusedColor}>
            <Icon
              name={paused ? 'playcircleo' : 'pause'}
              color={focusStatus === 'play' ? Theme.colors.Teal : '#ffffff'}
              size={25}
            />
          </FocusableHighlight>
          <FocusableHighlight
            nativeID={'component_touchable_highlight'}
            onPress={handleNext}
            onFocus={() => handleFocus('next')}
            style={Style.styles.button}
            underlayColor="transparent">
            <Icon
              name="stepforward"
              color={focusStatus === 'next' ? Theme.colors.Teal : '#ffffff'}
              size={25}
            />
          </FocusableHighlight>
        </View>
        <View style={Style.styles.progress}>
          <Progress.Bar
            progress={currentTime / duration}
            width={500}
            borderWidth={0}
            unfilledColor={Theme.colors.LightGrey}
            color={Theme.colors.Teal}
          />
        </View>
        <View style={Style.styles.timeline}>
          <Text style={Style.styles.timelineText}>
            {formatSeconds(currentTime)} / {formatSeconds(duration)}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Controller;
