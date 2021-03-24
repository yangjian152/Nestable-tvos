import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const HEIGHT = height;
export const WIDTH = width;

export const RATIO_H = height / 667;
export const RATIO_W = width / 375;

// scale
export const BASE_UNIT = 8;
export const DURATION = 200;
export const FONT = 15;
export const FONT_SMALL = 12;
export const BUTTON_WIDTH = 120;
export const BUTTON_HEIGHT = 40;

// icon size
export const ICON_12 = 12;
export const ICON_14 = 14;
export const ICON_15 = 15;
export const ICON_18 = 18;
export const ICON_20 = 20;
export const ICON_24 = 24;
export const ICON_30 = 30;
export const ICON_48 = 48;

export const ICON_DEFAULT = ICON_24;
export const ICON_SMALL = ICON_12;
export const ICON_LARGE = ICON_48;

// padding
export const PD1 = 1;
export const PD3 = 3;
export const PD5 = 5;
export const PD10 = 10;

export const RADIUS5 = 5;
export const RADIUS8 = 8;
export const RADIUS10 = 10;
export const RADIUS12 = 12;
export const RADIUS16 = 16;
export const RADIUS20 = 20;

export const DEFAULT_RADIUS = RADIUS5;
export const MEDIUM_RADIUS = RADIUS12;
export const LARGE_RADIUS = RADIUS20;
// colors
export const WHITE = '#FFFFFF';
export const GRAY = '#CCCCCC';
export const ACTIVE_GREEN = '#3BD0DA';
export const GREEN_GRAY = '#808F87';
export const DARK_GREEN = '#2B2B2B';
export const BLACK = '#000000';

// opacity colors
export const OP_DARKGREEN = 'rgba(43,43,43,0.8)';
