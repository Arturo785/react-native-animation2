import React from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../data/vwCars';
import { fonts, SPACING, width } from '../utils/theme';
import { SharedElement } from 'react-navigation-shared-element'
import * as Animateble from "react-native-animatable"


const AnimatebleScrollView = Animateble.createAnimatableComponent(ScrollView)

// how it looks while moving
const animation = {
    0 : {opacity : 0 , translateX : 50},
    1 : {opacity : 1 , translateX : 0}
}

export default function CarsDetails(props) {

    const {route} = props


    const{item} = route.params

    return (
        <SafeAreaView style={{flex : 1}}>

            <SharedElement id={`item.${item.key}.image`}>
                <Image source={{uri : item.image} } style={styles.image} />
            </SharedElement>    

            <View style={styles.meta}>

                <SharedElement id={`item.${item.key}.model`}>
                    <Text style={styles.model} numberOfLines={1} adjustsFontSizeToFit >{item.model}</Text>
                </SharedElement>    

                <SharedElement id={`item.${item.key}.description`}>
                    <Text style={styles.description}>{item.description}</Text>
                </SharedElement>

            </View>

            <AnimatebleScrollView 
                useNativeDriver // this means true
                animation={animation} // our object
                delay={300}
                horizontal
                contentContainerStyle={{padding : SPACING}}
                style={{flexGrow : 0}}
                showsHorizontalScrollIndicator={false}
                >
                {colors.map((color, key )=> {
                    return(
                        <View 
                            key={color}
                            style={[styles.swatch, {backgroundColor : color}]}
                            >
                        </View>)
                })}
            </AnimatebleScrollView>

            <Animateble.View
                useNativeDriver
                animation={animation} // our object
                delay={500}
            >

                <View style={styles.buttonContainer}>

                <Button  title="Buy now" color="#686d76" >
                    
                </Button>
                
                </View>

            </Animateble.View>

        </SafeAreaView>
    )
}

CarsDetails.sharedElements = (route, otherRoute, showing) => {
    const { item } = route.params;
    return [
      {
        id: `item.${item.key}.image`,
      },
      {
        id: `item.${item.key}.model`,
      },
      {
        id: `item.${item.key}.description`,
      },
    ];
  };

const styles = StyleSheet.create({
    image : {
        width : width * 2.1,
        height : width,
        resizeMode : "contain",
    },
    meta :{
        position : "absolute",
        top : SPACING * 4,
        left  : SPACING,
        width : width * 0.6,
    },
    model: {
        ...fonts.montserratBold,
        fontSize: 32,
        opacity: 0.8,
        fontWeight : "700",
        position : "absolute",

    },
      description: {
        ...fonts.montserratRegular,
        fontSize: 12,
        opacity: 0.7,
        position : "absolute",
        top : 50,
    },
    swatch : {
        width : 56,
        height : 56,
        borderRadius : 16,
        marginRight : SPACING,
    },
    buttonContainer : {
        width : "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop : 20,
    }
})
