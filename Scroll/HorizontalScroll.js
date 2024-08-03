import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';


  const DATA = [
    { id: '1', title: '', image: 'https://www.outfittrends.com/wp-content/uploads/2014/03/blusih-black-evening-dress.jpg' },
    { id: '2', title: '', image: 'https://afroculture.net/wp-content/uploads/2019/02/657620739e5dfa7bb2ee4c1e6cda8241-1024x1024.jpg'},
    { id: '3', title: '', image: 'https://i.pinimg.com/originals/4b/29/cf/4b29cf6903151ab86ecbad21d6e7f768.png' },
    { id: '4', title: '', image: 'https://www.dlink.com.sg/wp-content/uploads/2016/09/DIR-629_main.jpg' },
    { id: '5', title: '', image: 'https://phonesep.com/wp-content/uploads/2020/06/1874391785-1.jpg' },
    { id: '6', title: '', image: 'https://m.media-amazon.com/images/I/71HT28ErYDL.jpg' },
    { id: '7', title: '', image: 'https://assets.wfcdn.com/im/52543088/resize-h600-w600%5Ecompr-r85/2253/22534522/Stock+Pots%2C+Soup+Pots%2C+%26+Multi-Pots.jpg' },
    { id: '8', title: '', image: 'https://www.home-designing.com/wp-content/uploads/2016/11/mixed-wooden-wall-clocks-online-shopping.jpg' },
  ];
  

  
  
  
  
  const Item = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
    );
  };
  
  const ImageList = () => {
    return (
      <FlatList
      horizontal={true}
      style={{paddingVertical: 2}}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: -50, paddingHorizontal: 5.5,}}
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    );
  };
  
  const styles = StyleSheet.create({
    item: {
      flex: 1,
      marginHorizontal: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 11.5,
    
    },
    itemImage: {
      width:  150,
      height:  120,// Adjust height as needed
      borderRadius: 20,
      margin: -12.5
    },
    itemTitle: {
      marginTop: 10,
      textAlign: 'center',
      fontSize: 16,
    },
    imageContainer: {
    }
  });
  
  export default ImageList;
  


