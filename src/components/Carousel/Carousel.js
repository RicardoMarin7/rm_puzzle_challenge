import React, { useRef, useState, useCallback, useEffect } from 'react'
import { View, Animated, Dimensions } from 'react-native'
import CarouselCard from './CarouselCard'
import CarouselControls from './CarouselControls/CarouselControls'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './styles'



const Carousel = (props) => {

    const {
        data = [],
    } = props

    

    const { width } = Dimensions.get('screen')
    const flatListRef = useRef()
    const [actualIndex, setActualIndex] = useState(lastIndex);
    const ITEM_SIZE = (width * 0.7) 
    const [lastIndex, setLastIndex] = useState(null);

    const getLastIndex = async () => {
        try {
        let lastIndex = await AsyncStorage.getItem('LastIndex')
        setLastIndex(lastIndex)

        } catch (error) {
        console.log(error)
        }
    }    

    useEffect(async () => {
        await getLastIndex()
    }, [])


    useEffect(() => {
        scrollToOffset()
    }, [lastIndex]);


    const viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 95,
        waitForInteraction: false
    }    

    const onViewableItemsChanged = ({viewableItems}) =>{
        if (viewableItems.length < 1) return

        if(viewableItems.length > 1){
            const viewableItem = viewableItems.filter( (item) => !item?.item.separator)
            setActualIndex(viewableItem[0].index)
            return
        }

        setActualIndex(viewableItems[0].index)
    }

    const scrollToOffset = () =>{
        flatListRef.current.scrollToOffset({
            animated: false,
            offset: ITEM_SIZE * ( lastIndex - 1)
        })
    }

    const scrollToPrev = ( ) =>{
        flatListRef.current.scrollToIndex({
            animated: true,
            index: actualIndex - 1,
            viewPosition: 0.5
        })
    }

    const scrollToNext = ( ) =>{
        flatListRef.current.scrollToIndex({
            animated: true,
            index: actualIndex + 1,
            viewPosition: 0.5
        })
    }

    const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged, viewabilityConfig}])

    return (
        <View style={{flex: 1}}>
            <Animated.FlatList 
                data={[ {separator: true} , ...data, { separator: true}]}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                scrollEnabled={false}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                contentContainerStyle = {styles.Carousel__content_container}
                snapToInterval={ styles.Carousel__snap_interval}
                ref={flatListRef}
                scrollEventThrottle={16}
                // contentOffset={{x: Number(INITIAL_OFFSET) }}
                snapToAlignment={'center'}
                renderItem= {({item, index}) => {

                    if(item?.separator){
                        return <View style={ styles.Carousel__separator}/>
                    }
                    
                    let white = false

                    if(index % 2 === 0) white = true

                    return <CarouselCard 
                                item={item} 
                                white={white}
                                index={index}
                            />
                }}
            />

            <CarouselControls 
                scrollToPrev={scrollToPrev} 
                scrollToNext={scrollToNext}
                actualIndex={ actualIndex }
                dataLength={ data.length }
            />

        </View>
    )
}

export default Carousel;