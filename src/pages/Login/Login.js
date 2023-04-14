import React from 'react';
import {SafeAreaView, View, Image, Alert} from 'react-native';
import {Formik} from 'formik';
import { useDispatch } from 'react-redux';
import styles from './login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Config from 'react-native-config';
import usePost from '../../hooks/usePost/usePost';
const Login = ({navigation}) => {
  const {data, post, loading, error} = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }

  if (error) {
    Alert.alert('Dukkan', 'Bir hata oluştu');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dukkan', 'Kullanıcı bulunamadı!');
    } else {
      dispatch({type: 'SET_USER' , payload: {user}})
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo-login.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adınızı giriniz..."
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Sifrenizi giriniz"
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            <Button text="Giris Yap" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {lat: '-37.3159', long: '81.1496'},
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {firstname: 'john', lastname: 'doe'},
  phone: '1-570-236-7033',
  __v: 0,
};
