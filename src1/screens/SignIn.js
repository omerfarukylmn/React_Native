import {LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeImage from '../component/homeımage/HomeImage';
import {yemek, yes, google, twitter, facebook} from '../assents/icons';
import SignInSign from '../component/signInsignUp/SignInSign';
import styles from './styles';
import Login from '../component/loginpanel/Login';
import LoginButton from '../component/loginButton/LoginButton';
import Or from '../component/or/Or';
import Loginoptions from '../component/loginoptions/Loginoptions';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <View>
        <HomeImage yemek1={yemek} />
      </View>
      <View style={styles.container}>
        <SignInSign signin={'Sign In'} signup={'Sign Up'} />
      </View>
      <View style={styles.containerLogin}>
        <Login
          email={'E-mail address'}
          password={'Enter password'}
          forgotpassword={'Forgot password?'}
          remember={'Remember me'}
          check={yes}
        />
      </View>
      <LoginButton handlePress1={() => navigation.navigate('Menü')} />
      <View style={styles.container}>
        <Or or={'OR'} />
      </View>
      <View>
        <Loginoptions
          loginoptions1={'Sign in using:'}
          google1={google}
          twitter1={twitter}
          facebook1={facebook}
        />
      </View>
    </SafeAreaView>
  );
}
