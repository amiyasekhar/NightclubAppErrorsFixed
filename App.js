import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import SignUp from './SignUp'

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Homepage from './Homepage'
import Login from './Login'
import ProfileSetUp from './ProfileSetUp'
import ValueProvider,{useValue} from './ValueContext';
import {MyStack} from './Homepage'
import InsideApp from './InsideApp'
import ShowProfile from './ShowProfile'

import FailedSignIn from './FailedSignIn';

// This is a comment to test version control
// I am making a new change here on the master branch though. Will the pull request be able
// merge with this I am not so sure. 

export default function App() {
  const data = {firstName: "First name",lastName: "Last Name", email: "email@email.com", instagram: "insta", profilePic:""}

  return (
    <ValueProvider value={data}>
      <ProfileSetUp/>
    </ValueProvider>
  );
}