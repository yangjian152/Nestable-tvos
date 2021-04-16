import {Platform, PixelRatio, StyleSheet} from 'react-native';
import {Theme} from '../../theme';

// Get pixel ratio
let pixelRatio = PixelRatio.get();
if (Platform.OS === 'web') {
  pixelRatio = 1;
}

const Style = {
  backgroundColor: '#001113',
  modalBackgroundColor: '#444c58',
  buttonUnfocusedColor: '#61dafb',
  buttonFocusedColor: '#fff',
  buttonPressedColor: '#ccc',
  px: (size) => {
    return Math.round((size * (Theme.height / 1080)) / pixelRatio);
  },
};

Style.styles = StyleSheet.create({
  container: {
    width: Theme.width,
    height: Theme.height,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: Style.backgroundColor,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0.9,
  },
  wrapperHide: {
    backgroundColor: Style.backgroundColor,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
  },
  header: {
    width: '80%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: Theme.padding.pad6,
  },
  image: {
    width: 150,
    height: 30,
  },
  iconStyle: {
    width: 30,
    height: 30,
    tintColor: Theme.colors.White,
  },
  iconStyleActive: {
    width: 30,
    height: 30,
    tintColor: Theme.colors.Teal,
  },
  content: {
    width: '80%',
    height: 500,
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: Theme.fontSize.h1,
    color: Theme.colors.White,
    fontWeight: 'bold',
    fontFamily: Theme.fontFamily.SemiBold,
  },
  subTitle: {
    fontFamily: Theme.fontFamily.SemiBold,
    color: Theme.colors.White,
    fontSize: Theme.fontSize.h3,
    paddingBottom: Theme.padding.pad3,
  },
  description: {
    width: '60%',
    fontFamily: Theme.fontFamily.SemiBold,
    color: Theme.colors.White,
    fontSize: Theme.fontSize.p1,
    paddingBottom: Theme.padding.pad3,
  },
  controller: {
    width: '80%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonGroup: {
    width: '15%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  progress: {
    width: '70%',
  },
  timeline: {
    width: '15%',
  },
  timelineText: {
    color: Theme.colors.White,
  },
});

export default Style;
