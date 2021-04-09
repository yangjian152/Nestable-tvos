import React from 'react';
import {View, Image, Text} from 'react-native';
import Style from './Style';
import {Images, Theme} from '../../theme';

const Description = ({data}) => {
  return (
    <>
      <View style={Style.styles.header}>
        <Image source={Images.logoWhite} style={Style.styles.image} />
      </View>
      <View style={Style.styles.content}>
        <Text style={Style.styles.title} numberOfLines={1}>
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
