import React, {useState, useEffect} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import Config from "react-native-config";
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.REACT_APP_API_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error} </Text>;
  }

  return <FlatList data={data} renderItem={renderProduct} />;
};

export default Products;
