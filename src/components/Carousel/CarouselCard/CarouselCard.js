import React from 'react'
import { View, Image, Text, } from 'react-native'
import { styles } from './styles'

const CarouselCard = ({item}) => {

    return (
        <View style={ styles.CarouselCard__container }>
            <View style={ styles.CarouselCard__inner_container} >
                <Image source={{uri: item?.image[0]}}
                    style={ styles.CarouselCard__image }
                />

                <View
                    style={styles.CarouselCard__text_container}
                >
                    <Text
                        style={{
                            fontWeight: '700',
                            alignSelf: 'flex-start',
                            letterSpacing: 1.1,
                            textTransform: 'uppercase',
                            paddingHorizontal: 15,
                            paddingTop: 20,
                            color: 'white',
                            fontSize: 13                        
                        }}
                    >{item.title}</Text>
                    
                    <Text
                        style={{
                            fontSize: 11,
                            paddingHorizontal: 15,
                            paddingVertical: 5,
                            marginBottom: 10,
                            maxWidth: '90%',
                            fontStyle: 'italic',
                            color: '#ffffffbd',
                            lineHeight: 14,
                        }}
                    >{item.description}</Text>
                </View>
                
            </View>
        </View>
    );
}
 
export default CarouselCard;