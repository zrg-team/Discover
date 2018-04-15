import * as firebase from 'firebase'

export let database = null
export const init = async () => {
  let config = {
    apiKey: 'AIzaSyD76jqK_4UR_SYMG0TD_XOhZgk1djW8e4A',
    authDomain: 'discover-fb6fc.firebaseapp.com',
    databaseURL: 'https://discover-fb6fc.firebaseio.com',
    projectId: 'discover-fb6fc',
    storageBucket: 'discover-fb6fc.appspot.com',
    messagingSenderId: '1002130259522'
  }
  await firebase.initializeApp(config)
  database = firebase.database()
  return database
}
