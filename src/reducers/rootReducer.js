import {combineReducers} from 'redux';
import {walletsReducer} from './wallets';
import {activeWalletReducer} from './activeWallet';
import {carrencyReducer} from './carrency';
import {sheduleReducer} from './shedule';

export const rootReducer=combineReducers({
  wallets:walletsReducer,
  activeWallet:activeWalletReducer,
  carrency:carrencyReducer,
  shedule:sheduleReducer,
});
