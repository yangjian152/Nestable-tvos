import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {connect} from 'react-redux';
import {feed as feedActions} from '../../redux/actions';
import Style from './Style';
import {Images, Theme} from '../../theme';
import FocusableHighlight from '../../components/focusable/FocusableHighlight';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';

const Description = (props) => {
  const [focusStatus, setFocusStatus] = useState('');

  useEffect(() => {
    props.fetchVideos();
  }, []);

  const handleFocus = (status) => {
    setFocusStatus(status);
  };
  return (
    <View style={Style.styles.wrapper}>
      <View style={Style.styles.header}>
        <Image source={Images.logoWhite} style={Style.styles.image} />
      </View>
      <View style={Style.styles.content}>
        <Text style={Style.styles.title}>We Live in a Shipping Container</Text>
        <Text style={Style.styles.subTitle}>Apartment Therapy</Text>
        <Text style={Style.styles.description}>
          Seven gray metal rectangles create a stacked array of straight lines
          on a quiet street in New Orleans. These shipping containers once
          traveled along the Mississippi River. Now stationary, they make...
        </Text>
      </View>
      <View style={Style.styles.controller}>
        <View style={Style.styles.buttonGroup}>
          <FocusableHighlight
            nativeID={'component_touchable_highlight'}
            onPress={() => {}}
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
            onPress={() => {}}
            onFocus={() => handleFocus('play')}
            style={Style.styles.button}
            underlayColor={Style.buttonUnfocusedColor}>
            <Icon
              name={focusStatus === 'play' ? 'pause' : 'playcircleo'}
              color={focusStatus === 'play' ? Theme.colors.Teal : '#ffffff'}
              size={25}
            />
          </FocusableHighlight>
          <FocusableHighlight
            nativeID={'component_touchable_highlight'}
            onPress={() => {}}
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
            progress={0.4}
            width={500}
            borderWidth={0}
            unfilledColor={Theme.colors.LightGrey}
            color={Theme.colors.Teal}
          />
        </View>
        <View style={Style.styles.timeline}>
          <Text style={Style.styles.timelineText}>01:03/18:37</Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  videosLoading: state.feed.loading,
  videos: state.feed.videos,
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: (topics) => dispatch(feedActions.fetchVideos(topics)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Description);
