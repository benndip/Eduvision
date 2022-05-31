import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Platform, ToastAndroid } from 'react-native';
import isEmail from 'validator/lib/isEmail';

import styles from './Signup.style'

import { FormInput, FormButton, SocialButton } from '../../components';
import {AuthContext} from '../../navigation/AuthProvider'

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const { register } = useContext(AuthContext)

  const registerUser =  async () =>{
    if(email.length == 0 || password.length == 0 || confirmPassword.length == 0){
      setHasError(true);
      showToastWithGravityAndOffset('All Input fields must be filled')
      return false;
    }

    if (!isEmail(email)){
      setHasError(true);
      showToastWithGravityAndOffset('Not a valid email')
      return false;
    }

    if(password !== confirmPassword){
      setHasError(true);
      showToastWithGravityAndOffset('Password does not match')
      return false;
    }

    const user = await register(email, password)
    if(user){
      console.log(user);
      navigation.navigate('BottomNavigation');
    }else{

    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to <Text style={{ color: '#ff6b6b', fontWeight: 'bold', fontSize: 28 }}>Eduvision</Text> 🔥</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        passwordInput
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        passwordInput
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={registerUser}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
          Privacy Policy
        </Text>
      </View>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => { }}
          />

          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => { }}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
