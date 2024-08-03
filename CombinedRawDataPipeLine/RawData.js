import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: 1, title: 'Product 1', price: '$10', image: 'https://s3.amazonaws.com/digitaltrends-uploads-prod/2016/10/best-sports-cars-audi-r8-v10.jpg' },
  { id: 2, title: 'Product 2', price: '$20' },
  { id: 3, title: 'Product 3', price: '$30' },
  { id: 4, title: 'Product 4', price: '$40' },
];

const Card = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'brown',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: 150,
    height: 130
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
  },
});

export default Card;