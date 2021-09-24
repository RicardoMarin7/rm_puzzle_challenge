import React from 'react'
import { View, Image, Text, Animated } from 'react-native'
import { styles } from './styles'

const CarouselCard = ({item, white }) => {

    return (
        <Animated.View style={ styles.CarouselCard__container}>
            <View style={ styles.CarouselCard__inner_container} >
                <Image source={{uri: item?.image[0]}}
                    style={ styles.CarouselCard__image }
                />

                <View
                    style={ white ? { ...styles.CarouselCard__text_container, ...styles.CarouselCard__white_mode} : styles.CarouselCard__text_container }
                >
                    <Text
                        style={ white ? { ...styles.CarouselCard__title , ...styles.CarouselCard__white_mode} : styles.CarouselCard__title  }
                    >{item.title}</Text>
                    
                    <Text
                        style={ white ? { ...styles.CarouselCard__description , ...styles.CarouselCard__white_mode} : styles.CarouselCard__description  }
                        
                    >{item.description}</Text>
                </View>
                
            </View>
        </Animated.View>
    );
}
 
export default CarouselCard;