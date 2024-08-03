import React from "react";
import { View, FlatList, } from "react-native";
import { products } from "../Data";
import Product from "./Product";

const ProductScreen = () => {
    return(
     <View>
        <FlatList 
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=> <Product product={item}/>}
        numColumns={2}
        />
     </View>
    )
};

export default ProductScreen;