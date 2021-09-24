import React, { useEffect } from 'react'
import { styles } from './styles'
import { View, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CarouselControls = ({scrollToPrev, scrollToNext, actualIndex, dataLength }) => {

    const storeIndex = async () =>{
        try {
            if(actualIndex) await AsyncStorage.setItem('LastIndex', actualIndex.toString())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        storeIndex()
    }, [actualIndex]);


    return (
        <View style={styles.CarouselControls__container}>

            <View style={styles.CarouselControls__button}>
                <Button
                    title='Prev'
                    color='#1CA27F'
                    onPress={scrollToPrev}
                    disabled={ actualIndex === 1 ? true : false}
                />
            </View>

            <View style={styles.CarouselControls__button}>
                <Button
                    title='Next'
                    color='#1CA27F'
                    disabled={ actualIndex === dataLength ? true : false}
                    onPress={scrollToNext}
                /> 
            </View>
        </View>
    );
}
 
export default CarouselControls;