import React, {useState, useEffect} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import {Storage} from 'aws-amplify';
import {connect} from 'react-redux';
import {feed as feedActions} from '../../redux/actions';
import Style from './Style';
import {Images, Theme} from '../../theme';
import Video from 'react-native-video';
import Description from './Description';
import Controller from './Controller';
import ProgressBar from './ProgressBar';
import Timeline from './Timeline';
import {graphqlFetchUtils} from '../../utils';
import {videoService} from '../../services';

const Home = (props) => {
  const [fetching, setFetching] = useState(true);
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoData, setVideoData] = useState({});
  const [focusStatus, setFocusStatus] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [noAction, setNoAction] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setLoading(true);
    props
      .fetchVideos()
      .then(() => {
        if (props.videos.length > 0) {
          getVideoData(currentIndex);
        } else {
          setFetching(!fetching);
        }
      })
      .catch(() => {
        setFetching(!fetching);
      });
  }, [fetching]);

  const getVideoData = (index) => {
    const data = props.videos[index];
    setVideoData(data);
    setCurrentIndex(index);

    videoService.fetchVideoById(data.id).then((res) => {
      graphqlFetchUtils.buildVideoObject(res).then((result) => {
        Storage.get(result.videoUri).then((url) => {
          setLoading(false);
          setVideoUrl(url);
        });
      });
    });
  };

  const toggleShow = () => {
    if (noAction) {
      setIsShow(!isShow);
    }
  };

  const handleFocus = (status) => {
    setFocusStatus(status);
  };

  const handleNext = () => {
    let index = currentIndex + 1;
    if (index > props.videos.length - 1) {
      index = props.videos.length - 1;
    }
    getVideoData(index);
  };

  const handlePrev = () => {
    let index = currentIndex - 1;
    if (index < 0) {
      index = 0;
    }
    getVideoData(index);
  };

  const handlePlay = (play) => {
    setPaused(play);
  };

  const onProgress = (payload) => {
    setCurrentTime(payload.currentTime);
  };

  const onLoad = (payload) => {
    setDuration(payload.duration);
  };
  return (
    <View style={Style.styles.container}>
      {loading ? (
        <>
          <Image style={Theme.image} source={Images.appIcon} />
          <ActivityIndicator size="large" color={Theme.colors.Teal} />
        </>
      ) : (
        <>
          <Video
            style={Theme.videoMain}
            source={{uri: videoUrl}}
            onProgress={onProgress}
            onEnd={handleNext}
            paused={paused}
            resizeMode={'cover'}
            onLoad={onLoad}
          />
          <View
            style={isShow ? Style.styles.wrapper : Style.styles.wrapperHide}>
            {videoData && videoData.content && (
              <Description
                data={videoData}
                handleFocus={handleFocus}
                toggleShow={toggleShow}
              />
            )}
            <View style={Style.styles.controller}>
              <Controller
                focusStatus={focusStatus}
                handleFocus={handleFocus}
                handlePrev={handlePrev}
                handleNext={handleNext}
                handlePlay={handlePlay}
                paused={paused}
              />
              {!!currentTime && (
                <ProgressBar duration={duration} currentTime={currentTime} />
              )}
              {!!currentTime && (
                <Timeline duration={duration} currentTime={currentTime} />
              )}
            </View>
          </View>
        </>
      )}
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
