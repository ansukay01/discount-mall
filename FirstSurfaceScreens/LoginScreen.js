
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, CheckBox } from 'react-native';

export default function LoginScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
  
    const handleLogin = () => {
        if (!email || !password) {
          setErrorMessage('Please fill in all fields');
        } else {
          // Perform login action here
        }
      };
    

    return (
        <View>
            <Text style={styles.welcomeFont}>Welcome Back!</Text>
        <View style={styles.card}>
            <TextInput
        style={styles.input}
        placeholder=" Enter your Email address"
        value={email}
        onChangeText={setEmail}
      /> 
      <TextInput
        style={styles.Input}
        placeholder=" Enter your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      /> 
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.loginBtn}>
     <Text style={styles.loginFont}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.via}>or sign in via</Text>
        <View style={styles.groupLogo}>
        <TouchableOpacity>
        <Image source={{uri: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/facebook_logo_icon_147291.png'}} style={styles.logoImage}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={{uri: 'https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png'}} style={styles.logoImage}/>
        </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity>
        <Text style={styles.signUpFont}>Sign Up</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      backgroundColor: "#023020",
      marginBottom: 50
    },
    card: {
        width: 300, 
        height: 300, 
        backgroundColor: '#FDDA0D',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 2, 
    },
    log: {
        fontSize: 20,
        color: 'white',
        fontWeight: '10', 
        marginBottom: 15,
        fontWeight: '50', 
        margin: 180,
        marginHorizontal: 100
    },
    welcomeFont: {
        fontSize: 13,
        color: 'white',
        fontWeight: '10', 
        marginBottom: 10,
        fontWeight: '50', 
        marginHorizontal: 100,
        margin: 250
    }, 
    logoImage: {
        width: 30,
       height: 30,
   borderRadius: 5
    },
logoBtn: {
    width: 200,
    height: 48,
    backgroundColor: "",
    marginVertical: 100,
    marginHorizontal: 80,
    borderRadius: 5
},
companyName: {
    color: 'white',
    marginHorizontal: 50
},
groupLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    marginVertical: 13,
    marginHorizontal: 95  
},
via: {
    color: '#000060',
    marginTop: 10,
    marginHorizontal: 105,
    fontSize: 10
},
input: {
    width: 270,
    height: 45,
    borderRadius: 5,
    marginHorizontal: 13,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white', 
    marginTop: 40
},
Input: {
    width: 270,
    height: 45,
    borderRadius: 5,
    marginHorizontal: 13,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white', 
    marginTop: 10  
},
title: {
        fontSize: 24,
        marginBottom: 50,    
}, 
Btn: {
    width: 270,
    height: 45
},
loginBtn: {
    width: 270,
    height: 45, 
    backgroundColor: 'blue',
    marginHorizontal: 13,
    margin: 10,
    borderRadius: 5
},
loginFont: {
    color: 'white',
    marginHorizontal: 100,
    margin: 10
}, 
signUpFont: {
    fontSize: 18,
    color: 'white',
    fontWeight: '10', 
    marginBottom: 15,
    fontWeight: '900', 
    margin: 20,
    textDecorationLine: 'underline',
    marginHorizontal: 110 
}

})