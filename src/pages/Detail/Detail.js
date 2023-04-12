import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import Config from "react-native-config";
import styles from './Detail.styles';
import useFetch from '../../hooks/useFetch/useFetch';

const Detail = ({route}) => {
  const {id} = route.params;

  const {loading, data, error} = useFetch(`${Config.REACT_APP_API_URL}/${id}`);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error} </Text>;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.image}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price}TL</Text>
      </View>
    </View>
  );
};

export default Detail;
