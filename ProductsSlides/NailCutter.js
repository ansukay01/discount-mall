import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { addToCart } from '../Actions/cartActions';

export default function NailCutter({navigation}) {
    return (
        <View style={styles.container}>
         <Swiper style={styles.wrapper}>
            <View style={styles.slide}>
            <Image source={{uri: 'https://s3-us-west-2.amazonaws.com/s3.japonesque.com/wp-content/uploads/2017/11/28074205/053_Pro-Performance-Nail-Clipper-Detail-Image-2.jpg'}} style={styles.image} />
            </View>
            <View style={styles.slide}>
            <Image source={{uri: 'https://www.astonishingnailscy.com/wp-content/uploads/2017/05/NL-Nail-Cutter.jpg'}} style={styles.image} />
            </View>
            <View style={styles.slide}>
            <Image source={{uri: 'https://target.scene7.com/is/image/Target/GUEST_b7368b59-92cf-425a-865a-6430308dfe83?wid=488&hei=488&fmt=pjpeg'}} style={styles.image} />
            </View>
         </Swiper>
         
         <Text style={styles.fontColor}>Nail Cutter</Text> 
         <Text style={styles.fontComb}>Price: $5.5</Text> 
  
         <View style={styles.colorCard}>
         <Text style={styles.fontCol}>Colour:</Text> 
         <View style={styles.redCard}>
          <Text style={styles.txt}>Silver</Text>
          </View>
         </View>
         <View style={styles.sizeCard}>
         <Text style={styles.size}>Size:</Text>
         <Text style={styles.sizeFont}>Medium</Text>
         </View> 
         <TouchableOpacity style={styles.Btn}>
          <Text style={styles.addtoCart}>Add to Cart</Text>
         </TouchableOpacity>
         </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5DC',
      alignItems: 'center',
      marginTop: 5
      },
  slide: {
    alignItems: 'center',
      },
       
    image: {
        width: 400,
        height: 350,
    borderRadius: 20,
    marginTop: 70
  }, 
  fontComb: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
    marginStart: -300,
    marginTop: -30
  },

  cartBtn: {
    marginTop: -200
  },
  fontColor: {
    fontSize: 25,
    fontWeight: '900',
    marginVertical: 30,
    marginStart: -257,
    marginTop: 2.5
  },
  
  blueCard: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    width: 65,
    height: 45,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  redCard: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    width: 65,
    height: 45,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
    paddingHorizontal: 16,
    gap: 3,
    marginTop: 25
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
    paddingHorizontal: 16,
    gap: 10,
    marginTop: 5
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
  }
  
      });
    






