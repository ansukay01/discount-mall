import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { addToCart } from '../Actions/cartActions';

export default function WristWatch({navigation}) {
    return (
        <View style={styles.container}>
         <Swiper style={styles.wrapper}>
            <View style={styles.slide}>
            <Image source={{uri: 'https://pngimg.com/uploads/clock/clock_PNG6667.png'}} style={styles.image} />
            </View>
            <View style={styles.slide}>
            <Image source={{uri: 'https://www.christies.com/img/LotImages/2019/HGK/2019_HGK_17479_2286_000(rolex_a_rare_stainless_steel_automatic_wristwatch_with_sweep_centre_se065522).jpg?mode=max'}} style={styles.image} />
            </View>
            <View style={styles.slide}>
            <Image source={{uri: 'https://www.davidduggleby.com/files/images/auctions/GUID/46ccbe46-81d5-47d3-8fbd-60c20ff694bf.jpg'}} style={styles.image} />
            </View>
         </Swiper>
         
         <Text style={styles.fontColor}>WristWatch</Text> 
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
          <View style={styles.grayCard}>
          </View>
          <View style={styles.blueCard}>
          </View>
          <View style={styles.goldCard}>
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
    marginStart: -248,
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
  goldCard: {
    backgroundColor: '#FFD700',
    borderRadius: 500,
    marginVertical: 10,
    shadowColor: '#000',
    width: 40,
    height: 40,
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
  blackCard: {
      backgroundColor: 'black',
      borderRadius: 500,
      marginVertical: 10,
      shadowColor: '#000',
      width: 40,
      height: 40,
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  },
  grayCard: {
    backgroundColor: '#B2BEB5',
      borderRadius: 500,
      marginVertical: 10,
      shadowColor: '#000',
      width: 40,
      height: 40,
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  },
  blueCard: {
    backgroundColor: '#0000FF',
    borderRadius: 500,
    marginVertical: 10,
    shadowColor: '#000',
    width: 40,
    height: 40,
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
    gap: 1,
    marginTop: 13,
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
    marginHorizontal: 30
  },
  sizeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
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
    




