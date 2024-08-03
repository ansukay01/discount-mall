import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const SwipeableCard = () => {
  const data = [
    { id: 1, title: 'Card 1', image: {uri: 'https://images.complex.com/complex/image/upload/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/jovff1rxsd40oinlvphs.jpg' }},
    { id: 2, title: 'Card 2', image: {uri: 'https://data.mactechnews.de/Resized/541440_1200x630_Cover_Zoom.jpg'}},
    { id: 3, title: 'Card 3', image: {uri: 'https://data.mactechnews.de/Resized/541440_1200x630_Cover_Zoom.jpg' }},
  ];

  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      {data.map((card) => (
        <View key={card.id} style={styles.slide}>
          <Image source={card.image} style={styles.image} />
          <Text style={styles.title}>{card.title}</Text>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 100,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default SwipeableCard;




