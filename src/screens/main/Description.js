import React from 'react';
import {View, Image, Text} from 'react-native';
import Style from './Style';
import {Images, Theme} from '../../theme';
import FocusableHighlight from '../../components/focusable/FocusableHighlight';

const Description = ({data, toggleShow, handleFocus}) => {
  return (
    <>
      <View style={Style.styles.header}>
        <FocusableHighlight
          nativeID={'component_touchable_highlight'}
          onPress={toggleShow}
          onFocus={() => handleFocus('toggle')}
          style={Style.styles.button}
          underlayColor={Style.buttonUnfocusedColor}>
          <Image source={Images.logoWhite} style={Style.styles.image} />
        </FocusableHighlight>
      </View>
      <View style={Style.styles.content}>
        <Text style={Style.styles.title} numberOfLines={2}>
          {data.content.title}
        </Text>
        <Text style={Style.styles.subTitle} numberOfLines={1}>
          {data.user.fullName}
        </Text>
        <Text style={Style.styles.description} numberOfLines={3}>
          {data.content.body}
        </Text>
      </View>
    </>
  );
};

export default Description;
