import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texT}>Welcome to Super Mall</Text>
      <Text style={styles.TexT}>The online store where you can get everything at a</Text>
      <Text style={styles.Text}>cheaper price and get delivered for free</Text>
      <View style={styles.groupImages}>
      <Image source={{uri: 'https://media.glamour.com/photos/569592d193ef4b09520d23cf/master/pass/fashion-2015-07-nyfwm-hot-guys-hats-photographer-main.jpg'}} style={styles.image1} />
      <Image source={{uri: 'https://ae01.alicdn.com/kf/HTB1W_bSKXXXXXbfapXXq6xXFXXXI/High-End-Luxury-2015-Autumn-Girls-Dress-Brand-Designer-Kids-Clothes-Winter-Kids-Clothes-For-Baby.jpg'}} style={styles.image1} />
      <Image source={{uri: 'http://2.bp.blogspot.com/-33mGfY-2gLg/UGtI6W4iQjI/AAAAAAAAAGM/8q7hX_VwF00/s1600/53480314295264327_JThZV4Fx_c.jpg'}} style={styles.image1} />
      <Image source={{uri: 'https://ae01.alicdn.com/kf/HTB1r600KXXXXXXnXpXXq6xXFXXXz/2-piece-Embroidery-Dress-2016-new-Spring-High-quality-fashion-Women-Clothes-set-XL-XXXL-size.jpg'}} style={styles.image1} />
      </View>
      <TouchableOpacity style={styles.continueBtn}>
        <Text style={styles.forward}>Continue</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 180,
    backgroundColor: "#023020"
  },
  texT: {
   fontSize: 25,
   color: '#FDDA0D',
   fontWeight: '10',
   marginBottom: 10,
  },
  TexT: {
    fontSize: 14,
    color: 'white',
    fontWeight: '10', 
    marginBottom: 4,
    fontWeight: '900',
  },
  Text: {
    fontSize: 14,
    color: 'white',
    fontWeight: '10',
    fontWeight: '900', 
  },
  image1: {
  width: 90,
  height: 250,
  borderRadius: 10,
  margin: 10,
  gap: -2,
  marginLeft: 9,
  marginRight: -5
  },
  groupImages: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: -20
  },
  forward: {
    fontSize: 18,
    color: 'white',
    fontWeight: '10',
    fontWeight: '200', 
    marginLeft: 95,
    margin: 10
  },
  continueBtn: {
    backgroundColor: '#FDDA0D',
    width: 280,
    height: 45,
    borderRadius: 5
  }

});
