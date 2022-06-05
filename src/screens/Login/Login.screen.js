import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import isEmail from 'validator/lib/isEmail';

import styles from './Login.style';

import { FormInput, FormButton, SocialButton } from '../../components';

import { AuthContext } from '../../navigation/AuthProvider';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const { login, setUser } = useContext(AuthContext);

  const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };


  const loginUser = () => {

    setLoading(true);

    if (email.length == 0 || password.length == 0) {
      showToastWithGravityAndOffset('All Input fields must be filled')
      setLoading(false);
      return false;
    }

    if (!isEmail(email)) {
      showToastWithGravityAndOffset('Not a valid email');
      setLoading(false);
      return false;
    }

    const user = await login(email, password)
    if (user) {
      setUser(user)
      AsyncStorage.setItem('@user', user);
      navigation.navigate('Home');
    } else {

    }
    setLoading(false);

  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../res/images/auth.png')}
        style={styles.logo}
      />
      <Text style={{ color: '#ff6b6b', fontWeight: 'bold', fontSize: 28, marginVertical: 20 }}>Eduvision 🔥</Text>

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
        secureTextEntry={true}
      />

      {
        loading
          ?
          <ActivityIndicator style={{ marginTop: 10 }} size='large' color={'#2e64e5'} />
          :
          <FormButton
            buttonTitle="Login"
            onPress={loginUser}
          />
      }

      <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => { }}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => { }}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;
