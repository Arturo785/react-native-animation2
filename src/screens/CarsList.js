import React from 'react'
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SharedElement } from 'react-navigation-shared-element'
import vwCars from "../data/vwCars"

import { fonts, SPACING, width } from '../utils/theme';


const ITEM_SIZE = 120;

export default function CarsList(props) {


    const {navigation} = props

    const goToScreen = (item) =>{
        navigation.navigate("carDetails", {item})
    }


    return (
        <SafeAreaView style={{flex : 1}}>
            <StatusBar hidden/>
            <FlatList 
                data={vwCars}
                keyExtractor={(item) => item.key}
                contentContainerStyle={{padding : SPACING}}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => goToScreen(item)} > 
                            
                            <View style={styles.item}>

                                <View>
                                    <SharedElement id={`item.${item.key}.model`}>
                                        <Text style={styles.model}>{item.model}</Text>
                                    </SharedElement>
                                    <SharedElement id={`item.${item.key}.description`}>
                                        <Text style={styles.description}>{item.description}</Text>
                                    </SharedElement>
                                </View>

                                <SharedElement 
                                    id={`item.${item.key}.image`}  // like this fixs the bug of the car
                                    style={styles.image}>

                                    <Image 
                                            source={{ uri: item.image }}
                                            style={{flex : 1, resizeMode: "center"}} 
                                    />
                                </SharedElement>    

                            </View>


                        </TouchableOpacity>
                    )
                }}
            
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
        height: ITEM_SIZE,
        borderRadius: 12,
        marginBottom: SPACING,
        padding: SPACING,
        backgroundColor: '#C1CEE077',
        overflow: 'hidden',
      //  flexDirection: 'row',
      },
      model: {
        ...fonts.montserratBold,
        fontSize: 18,
        opacity: 0.8,
        fontWeight : "700",
        position: 'absolute', // fixs the bug of the letter
      },
      description: {
        ...fonts.montserratRegular,
        fontSize: 12,
        opacity: 0.4,
        top: 20 + SPACING / 2,
        position: 'absolute', // fixes the bug of letter
      },
      image: {
        height: ITEM_SIZE * 1.2,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        right: '-40%',
      },
})
