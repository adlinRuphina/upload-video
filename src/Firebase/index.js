import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC2SsjatCKtWECDX622NWMzsGywKEDjXeI',
  authDomain: 'upload-27e6a.firebaseapp.com',
  databaseURL: 'https://upload-27e6a.firebaseio.com',
  projectId: 'upload-27e6a',
  storageBucket: 'upload-27e6a.appspot.com',
  messagingSenderId: '95221955039',
  appId: '1:95221955039:web:11dcfb1bb73dcbeba46c6a',
  measurementId: 'G-VBLCGE92RY',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
