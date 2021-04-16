import React from 'react';
import {View, Image} from 'react-native';
import Style from './Style';
import {Theme, Images} from '../../theme';
import FocusableHighlight from '../../components/focusable/FocusableHighlight';

const Controller = ({
  focusStatus,
  handleFocus,
  handlePrev,
  handleNext,
  handlePlay,
  paused,
}) => {
  return (
    <View style={Style.styles.buttonGroup}>
      <FocusableHighlight
        nativeID={'component_touchable_highlight'}
        onPress={handlePrev}
        onFocus={() => handleFocus('prev')}
        style={Style.styles.button}
        underlayColor={Style.buttonUnfocusedColor}>
        <Image
          style={
            focusStatus === 'prev'
              ? Style.styles.iconStyleActive
              : Style.styles.iconStyle
          }
          source={Images.skipPrev}
        />
      </FocusableHighlight>
      <FocusableHighlight
        nativeID={'component_touchable_highlight'}
        onPress={() => handlePlay(!paused)}
        onFocus={() => handleFocus('play')}
        style={Style.styles.button}
        underlayColor={Style.buttonUnfocusedColor}>
        <Image
          source={paused ? Images.playCircle : Images.pause}
          style={{
            tintColor:
              focusStatus === 'play' ? Theme.colors.Teal : Theme.colors.White,
          }}
        />
        {/* <Icon
          name={paused ? 'playcircleo' : 'pause'}
          color={focusStatus === 'play' ? Theme.colors.Teal : '#ffffff'}
          size={25}
        /> */}
      </FocusableHighlight>
      <FocusableHighlight
        nativeID={'component_touchable_highlight'}
        onPress={handleNext}
        onFocus={() => handleFocus('next')}
        style={Style.styles.button}
        underlayColor="transparent">
        {/* <Icon
          name="stepforward"
          color={focusStatus === 'next' ? Theme.colors.Teal : '#ffffff'}
          size={25}
        /> */}
        <Image
          style={
            focusStatus === 'next'
              ? Style.styles.iconStyleActive
              : Style.styles.iconStyle
          }
          source={Images.skipNext}
        />
      </FocusableHighlight>
    </View>
  );
};

export default Controller;
