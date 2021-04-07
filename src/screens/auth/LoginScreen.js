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
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Video from 'react-native-video';
import videoSource from '../../assets/videos/NSTBL-Teaser-NoAudio.mp4';
import {Images, Theme} from '../../theme';
import {FocusableHighlight} from '../../components';
import {Auth} from 'aws-amplify';
import {validatorUtils, authUtils} from '../../utils';
import {auth as authActions, ui as uiActions} from '../../redux/actions';
import {navigate} from '../../Navigation';

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

const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const emailField = useRef(null);
  const passwordField = useRef(null);
  const buttonField = useRef(null);

  const handleSignIn = async (e) => {
    console.log('submit.....', username, password);
    if (username && password) {
      await Auth.signIn(username, password).then((user) => {
        if (
          user.challengeName &&
          user.challengeName === 'NEW_PASSWORD_REQUIRED'
        ) {
          setError('New Password Required');
          return;
        }
      });

      const currentUser = await authUtils.authCurrentUser();
      if (currentUser) {
        props.login(currentUser);
        navigate('home');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Video
        style={Theme.video}
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
          <View style={styles.component}>
            <View style={styles.componentContainer}>
              <View style={[styles.componentContainer, styles.horizontal]}>
                <TextInput
                  ref={emailField}
                  nativeID={'component_email_input'}
                  placeholder={'Username'}
                  onChangeText={setUsername}
                  value={username}
                  placeholderTextColor={styles.placeholderStyle.color}
                  // clearButtonMode={'always'}
                  autoCorrect={false}
                  autoFocus={false}
                  style={styles.textInput}
                  // returnKeyType="next"
                />
                {Platform.OS === 'android' && (
                  <FocusableHighlight
                    onPress={() => {}}
                    onFocus={() => {
                      if (emailField.current) {
                        emailField.current.focus();
                      }
                    }}
                    style={styles.dummyButton}>
                    <Text />
                  </FocusableHighlight>
                )}
                <TextInput
                  ref={passwordField}
                  nativeID={'component_password_input'}
                  placeholder={'Password'}
                  onChangeText={setPassword}
                  value={password}
                  placeholderTextColor={styles.placeholderStyle.color}
                  // clearButtonMode={'always'}
                  autoCorrect={false}
                  autoFocus={false}
                  secureTextEntry={true}
                  style={styles.textInput}
                  // returnKeyType="next"
                />
                {Platform.OS === 'android' && (
                  <FocusableHighlight
                    onPress={() => {}}
                    onFocus={() => {
                      if (passwordField.current) {
                        passwordField.current.focus();
                      }
                    }}
                    style={styles.dummyButton}>
                    <Text />
                  </FocusableHighlight>
                )}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={styles.component}>
        <View style={styles.componentContainer}>
          <View style={[styles.componentContainer, styles.horizontal]}>
            <FocusableHighlight
              ref={buttonField}
              nativeID={'component_touchable_highlight'}
              onPress={handleSignIn}
              onFocus={() => {
                if (buttonField.current) {
                  buttonField.current.focus();
                }
              }}
              style={styles.button}
              underlayColor={Theme.colors.ActiveGreen}
              styleFocused={{backgroundColor: Theme.colors.Teal}}
              stylePressed={{backgroundColor: Theme.colors.Teal}}>
              <Text style={styles.buttonText}>Sign In</Text>
            </FocusableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

LoginScreen.defaultProps = {
  login: () => {},
};

const mapStateToProps = ({auth: authData}) => ({authData});
const ConnectedComponent = connect(mapStateToProps, {
  login: authActions.login,
  updateUi: uiActions.update,
})(LoginScreen);
export default LoginScreen;
export {ConnectedComponent};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
    backgroundColor: Theme.colors.Black,
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
  scrollview: {
    width: Style.px(1520),
    height: Style.px(780),
  },
  component: {
    width: '100%',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  text: {
    width: Style.px(200),
    fontSize: Style.px(20),
    color: 'white',
  },
  componentContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  horizontal: {
    height: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Style.px(10),
  },
  dummyButton: {
    position: 'absolute',
    width: Style.px(20),
    height: Style.px(20),
    backgroundColor: 'transparent',
  },
  textInput: {
    width: 300,
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
    flex: 1,
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
