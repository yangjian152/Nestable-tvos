import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  TextInput,
  StyleSheet,
  PixelRatio,
} from 'react-native';
import Video from 'react-native-video';
import videoSource from '../../assets/videos/NSTBL-Teaser-NoAudio.mp4';
import {Images, Theme} from '../../theme';
import {FocusableHighlight} from '../../components';

// Get pixel ratio
let pixelRatio = PixelRatio.get();
if (Platform.OS === 'web') {
  pixelRatio = 1;
}

// Screen height
let height = 1080;

const Style = {
  backgroundColor: '#282c34',
  modalBackgroundColor: '#444c58',
  buttonUnfocusedColor: '#61dafb',
  buttonFocusedColor: '#fff',
  buttonPressedColor: '#ccc',
  px: (size) => {
    return Math.round((size * (height / 1080)) / pixelRatio);
  },
};

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const emailField = useRef(null);
  const passwordField = useRef();

  const handleSignIn = () => {
    console.log('submit', username, password);
  };
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={videoSource}
        repeat
        resizeMode={'cover'}
      />
      <View style={styles.header}>
        <Image source={Images.logoWhite} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <View style={styles.inner}>
              <TextInput
                ref={emailField}
                placeholder="Username"
                style={styles.textInput}
                placeholderTextColor={styles.placeholderStyle.color}
                clearButtonMode={'always'}
                autoCorrect={false}
                autoFocus={false}
              />
            </View>
            <View style={styles.inner}>
              <TextInput
                ref={passwordField}
                placeholder="Password"
                style={styles.textInput}
                secureTextEntry
                placeholderTextColor={styles.placeholderStyle.color}
                clearButtonMode={'always'}
                autoCorrect={false}
                autoFocus={false}
              />
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={styles.content}>
        <FocusableHighlight
          nativeID={'component_touchable_highlight'}
          onPress={handleSignIn}
          style={styles.button}
          underlayColor={Theme.colors.ActiveGreen}
          styleFocused={{backgroundColor: Theme.colors.Teal}}
          stylePressed={{backgroundColor: Theme.colors.Teal}}>
          <Text style={styles.buttonText}>Sign In</Text>
        </FocusableHighlight>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
  },
  video: {
    width: '100%',
    height: '100%',
    zIndex: 0,
    position: 'absolute',
    opacity: 0.5,
  },
  header: {
    width: '100%',
    height: Style.px(300),
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardContainer: {
    paddingTop: Style.px(100),
    width: '40%',
    height: Style.px(1080),
    flex: 1,
    display: 'flex',
  },
  inner: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    flex: 1,
  },
  textInput: {
    height: 50,
    color: Theme.colors.White,
    borderColor: Theme.colors.White,
    borderBottomWidth: 1,
    fontWeight: 'bold',
    fontSize: Theme.fontSize.p1,
  },
  placeholderStyle: {
    color: Theme.colors.White,
  },
  btnContainer: {
    backgroundColor: Theme.colors.White,
    marginTop: 12,
  },
  button: {
    width: '20%',
    height: Style.px(70),
    backgroundColor: Theme.colors.ActiveGreen,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: Theme.colors.White,
    fontSize: Theme.fontSize.p1,
    fontWeight: 'bold',
  },
  content: {
    width: '100%',
    height: Style.px(780),
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
});
