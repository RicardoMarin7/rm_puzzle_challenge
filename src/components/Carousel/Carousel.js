import React from 'react'
import { FlatList, View } from 'react-native'
import CarouselCard from './CarouselCard'
import { styles } from './styles'

const Carousel = (props) => {

    const {
        data = []
    } = props

    return (
        <FlatList 
            data={[ {separator: true} , ...data, { separator: true}]}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            contentContainerStyle = {styles.Carousel__content_container}
            snapToInterval={ styles.Carousel__snap_interval}
            snapToAlignment={ "start"}
            renderItem= {({item}) => {
                if(item?.separator){
                    return <View style={ styles.Carousel__separator}/>
                }

                return <CarouselCard item={item} />
            }}
        />
    )
}

export default Carousel;