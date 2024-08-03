import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

export default function Komb({navigation}) {
    return (
        <View style={styles.container}>
         <Swiper style={styles.wrapper}>
            <View style={styles.slide}>
            <Image source={{uri: 'https://pngimg.com/uploads/comb/comb_PNG41.png'}} style={styles.image} />
            </View>
            <View style={styles.slide}>
            <Image source={{uri: 'https://static.vecteezy.com/system/resources/previews/006/867/694/original/comb-illustration-black-and-white-line-art-free-vector.jpg'}} style={styles.image} />
            </View>
            <View style={styles.slide}>
            <Image source={{uri: 'https://clipart-library.com/new_gallery/258-2589191_black-comb-normal-hair-thick-combs.png'}} style={styles.image} />
            </View>
         </Swiper>
         <TouchableOpacity onPress={()=>navigation.navigate('')} >
         <Text style={styles.addCart}>Add to Cart</Text>
         </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      marginTop: 75
    },

    slide: {
        alignItems: 'center',
      },
      image: {
        width: 370,
        height: 260,
        borderRadius: 5,
      }, 
     
      on: {
        marginBottom: -600
    
      }  
    });