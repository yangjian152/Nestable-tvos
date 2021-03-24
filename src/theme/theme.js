import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const RatioH = height / 667;
const RatioW = width / 375;
const isIphone8 = height === 667 && width === 375;

const defaultTheme = {
  sectionBackgroundColor: '#FFFFFF',
  sectionBackgroundAltColor: '#000000',
  padding: {
    padsm: 3 * RatioH,
    pad0: 5 * RatioH,
    pad1: 10 * RatioH,
    pad15: 15 * RatioH,
    pad2: 20 * RatioH,
    pad25: 25 * RatioH,
    pad3: 30 * RatioH,
    pad35: 35 * RatioH,
    pad4: 40 * RatioH,
    pad5: 50 * RatioH,
    pad6: 60 * RatioH,
    pad65: 65 * RatioH,
    pad7: 70 * RatioH,
    pad8: 80 * RatioH,
  },
  colors: {
    White: '#FFFFFF',
    Black: '#000000',
    Tango: '#F16E22',
    PersianRed: '#C0342E',
    Grey: '#e6e6e7',
    Downy: '#62C9BF',
    Sirocco: '#6E6F6F',
    LightBlue: '#3BCADA',

    MedGreen: '#45503B',
    DarkGreen: '#2B2B2B',
    LightGrey: '#EDEDED',
    GreenGrey: '#808F87',
    GreenGray: '#838F88',
    Teal: '#18868E',
    ActiveGreen: '#3BD0DA',
    AlertRed: '#C1220D',
    NeutralGrey: '#9F9FB0',
    MainUiHighlight: '#69CED8',

    WhiteOpc: 'rgba(255,255,255,0.9)',
    GreyOpc0: 'rgba(43,43,43,0)',
    GreyOpc: 'rgba(43,43,43,0.9)',
    GreyOpc1: '#232727',

    SystemUiBackground: '#FAFAFA',
    SystemUiBorder: '#E9E9E9',
    SystemUiHighlight: '#559AE9',
  },
  fontFamily: {
    Black: 'Montserrat-Black',
    BlackItalic: 'Montserrat-BlackItalic',
    Bold: 'Montserrat-Bold',
    BoldItalic: 'Montserrat-BoldItalic',
    ExtraBold: 'Montserrat-ExtraBold',
    ExtraBoldItalic: 'Montserrat-ExtraBoldItalic',
    ExtraLight: 'Montserrat-ExtraLight',
    ExtraLightItalic: 'Montserrat-ExtraLightItalic',
    Italic: 'Montserrat-Italic',
    Light: 'Montserrat-Light',
    LightItalic: 'Montserrat-LightItalic',
    Medium: 'Montserrat-Medium',
    MediumItalic: 'Montserrat-MediumItalic',
    Regular: 'Montserrat-Regular',
    SemiBold: 'Montserrat-SemiBold',
    SemiBoldItalic: 'Montserrat-SemiBoldItalic',
    Thin: 'Montserrat-Thin',
    ThinItalic: 'Montserrat-ThinItalic',
  },
  fontSize: {
    h1: 32 * RatioH,
    h2: 28 * RatioH,
    h3: 24 * RatioH,
    h4: 22 * RatioH,
    p1: 18 * RatioH,
    p2: 16 * RatioH,
    p3: 14 * RatioH,
    p4: 12 * RatioH,
    p5: 10 * RatioH,
  },
  Button: {
    WidthDefault: 120 * RatioW,
    HeightDefault: 40 * RatioH,
  },
  Ratio: {
    H: RatioH,
    W: RatioW,
  },
  Resolution: {
    H: height,
    W: width,
  },
  isIphone8,
};

export default defaultTheme;
