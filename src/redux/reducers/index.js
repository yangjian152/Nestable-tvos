import { combineReducers } from 'redux';
import auth from './auth';
import settings from './settings';
import ui from './ui';
import uiBroadcast from './uiBroadcast'; // should/could be removed
import feed from './feed'

const rootReducer = combineReducers({ ui, uiBroadcast, auth, settings, feed });

export default rootReducer;
