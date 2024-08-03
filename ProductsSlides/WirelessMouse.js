import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { addToCart } from '../Actions/cartActions';

export default function WirelessMouse({navigation}) {
    return (
        <View style={styles.container}>
         <Swiper style={styles.wrapper}>
            <View style={styles.slide}>
            <Image source={{uri: 'https://www.bhphotovideo.com/images/images1000x1000/dell_pxk14_wm123_optical_mouse_1135878.jpg'}} style={styles.image} />
            </View>
            <View style={styles.slide}>
            <Image source={{uri: 'https://www.bigw.com.au/medias/sys_master/images/images/h9f/h0d/10766925103134.jpg'}} style={styles.image} />
            </View>
            <View style={styles.slide}>
            <Image source={{uri: 'https://roundpulse.com/wp-content/uploads/2017/10/61JaqatcSwL._SL1280_-1024x1024.jpg'}} style={styles.image} />
            </View>
         </Swiper>
         
         
         <Text style={styles.fontColor}>Wireless Mouse</Text> 
         <Text style={styles.fontComb}>Price: $15</Text> 
         <View style={styles.borderCard}>
         <View style={styles.sizeCard}>
         <Text style={styles.brands}>Brands:</Text>
         <Text style={styles.brandsFont}>Orient</Text>
         <Text style={styles.brandsFont}>Rolex</Text>
         <Text style={styles.brandsFont}>Seiko</Text>
         </View>
         <View style={styles.colorCard}>
         <Text style={styles.fontCol}>Colour:</Text> 
         <View style={styles.blackCard}>
          </View>
          <View style={styles.redcard}>
          </View>
          
         </View>
         <View style={styles.sizeCard}>
         <Text style={styles.size}>WristBand-Size:</Text>
         <Text style={styles.sizeFont}>small</Text>
         <Text style={styles.sizeFont}>medium</Text>
         <Text style={styles.sizeFont}>large</Text>
         </View>
         </View>
         <Text style={styles.descriptFont}>Description:</Text>
         <Text style={styles.fontDescription}>Discover the perfect blend of sophistication and functionality with the Elegant ChronoMaster Watch. 
          Crafted with precision, this timepiece is designed for those who appreciate the finer things in life.</Text>
          <TouchableOpacity style={styles.Btn}>
          <Text style={styles.addtoCart}>Add to Cart</Text>
         </TouchableOpacity>
         </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      marginTop: 5
      },
  slide: {
    alignItems: 'center',
      },
       
    image: {
        width: 390,
        height: 350,
    borderRadius: 30,
    marginTop: 70
  }, 
  fontComb: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
    marginStart: -300,
    marginTop: -30
  },
  descriptFont: {
    fontSize: 18,
    fontWeight: '900',
    marginStart: -290,
    marginBottom: 150,
    
  },

  cartBtn: {
    marginTop: -200
  },
  fontColor: {
    fontSize: 25,
    fontWeight: '900',
    marginVertical: 30,
    marginStart: -195,
    marginTop: 2.5
  },
  
  
  redcard: {
    backgroundColor: 'red',
      borderRadius: 500,
      marginVertical: 10,
      shadowColor: '#000',
      width: 40,
      height: 40,
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      marginStart: -130
  },
  blackCard: {
      backgroundColor: 'black',
      borderRadius: 500,
      marginVertical: 10,
      shadowColor: '#000',
      width: 40,
      height: 40,
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      marginStart: -190
  },
  
  

  text: {
    color: 'white',
    marginStart: 16,
    marginTop: 10
  },
  txty: {
    color: 'white',
    marginStart: 16,
    marginTop: 10
  },
  txt: {
    color: 'white',
    marginStart: 16,
    marginTop: 10
  },
  colorCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    margin: 50,
    marginTop: 14,
  },
  tet: {
    color: 'white',
    marginStart: 16,
    marginTop: 10
  },
  size: {
    fontSize: 14.7,
    fontWeight: '900',
    marginVertical: 7.5
  },
  fontCol: {
    marginVertical: 20,
    fontSize: 14.7,
    fontWeight: '900',
    marginHorizontal: 5
  },
  sizeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 10,
  },
  sizeFont: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 110,
  },
  addtoCart: {
    color: 'white',
    fontSize: 17.72,
    marginStart: 135,
    marginVertical: 13,
    fontWeight: 'bold'
  },
  Btn: {
    borderRadius: 5,
        backgroundColor: 'black',
        width: 370,
        height: 57,
        marginBottom: 60,
        marginLeft: -3
  },
  borderCard: {
    borderWidth: 2,
    borderRadius: 10,
    width: 360,
    height: 170,
    marginBottom: 20,
    marginTop: 20
  },
  fontDescription: {
    marginTop: -150,
    marginBottom: 40,
    fontSize: 13.5,
    fontWeight: '600',
    color: '#343434'
  },
  Btn: {
    borderRadius: 5,
    backgroundColor: 'black',
    width: 370,
    height: 57,
    marginBottom: 10,
    marginTop: -25,
    marginLeft: -3
  },
  addtoCart: {
    color: 'white',
    fontSize: 17.72,
    marginStart: 135,
    marginVertical: 13,
    fontWeight: 'bold'
  },
  brands: {
    marginVertical: 5,
    fontSize: 14.7,
    fontWeight: '900',
    marginHorizontal: 30,
  },
  brandsFont: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: -15,
    marginTop: 5.6,
    color: 'white',
    backgroundColor: 'black'
  }
  
      });
    








