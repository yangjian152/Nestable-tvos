import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import {feed as feedActions} from '../../redux/actions';
import Style from './Style';
import {Images, Theme} from '../../theme';
import Video from 'react-native-video';
import videoSource from '../../assets/videos/NSTBL-Teaser-NoAudio.mp4';
import Description from './Description';

const Home = (props) => {
  useEffect(() => {
    props.fetchVideos();
  }, []);
  console.log('render', props.route);
  return (
    <View style={Style.styles.container}>
      <Video
        style={Theme.videoMain}
        source={videoSource}
        repeat
        resizeMode={'cover'}
      />
      <Description />
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
