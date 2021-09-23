import {Dimensions} from 'react-native'

const { width, height } = Dimensions.get('screen')
const imageWidth = width * 0.7
const imageHeight = imageWidth
const BORDER_RADIUS = width / 30

export const styles = {
    CarouselCard__container:{
        width: imageWidth,
        margin: 0
    },

    CarouselCard__image:{
        width: '100%',
        height: imageHeight * 0.8,
        resizeMode: 'cover',
        margin: 0,
        borderRadius: BORDER_RADIUS
    },

    CarouselCard__inner_container:{
        padding: 10,
        alignItems: "center",
        overflow: 'hidden',
        
    },

    CarouselCard__title:{
        fontWeight: 700
    },

    CarouselCard__text_container:{
        backgroundColor: '#1b1915',
        width: '100%',
        marginTop: -25,
        borderBottomLeftRadius: BORDER_RADIUS,
        borderBottomRightRadius: BORDER_RADIUS,
    }
}