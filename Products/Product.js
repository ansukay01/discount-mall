import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Product = ({product}) => {
    return (
        <View style={styles.container}>
        <View style={styles.card}>
            <Image 
            style={styles.image}
            source={{ uri: product.image}}/>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 8,
        borderRadius: 5,
    },
    image: {
        width: 160,
        height: 155,
        marginBottom: 6,
        borderRadius: 10
    },
    card: {
        padding: 2,
        borderRadius: 10,
        backgroundColor: '#FAF9F6',
        margin: 2,
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {width: 0, height: 2}
    },
    name: {
        fontWeight: 'bold'
    },
    price: {
        fontSize: 13,
        color: '#ffbd14',
        fontWeight: 'bold'
    }
})

export default Product;