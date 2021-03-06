import { generateMnemonic } from 'react-native-bip39';
import { takeLatest, call, put } from 'redux-saga/effects';

import navigator from 'state/navigator';
import { authActions } from 'state/auth';

function* run() {
  const mnemonic = yield call(generateMnemonic, 128);

  yield put(authActions.set({ mnemonic }));

  yield call(navigator.navigate, 'Auth', 'Mnemonic');
}

export default takeLatest(authActions.signupStart, run);
