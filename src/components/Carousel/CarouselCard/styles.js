import {Dimensions} from 'react-native'

const { width, height } = Dimensions.get('screen')
const imageWidth = width * 0.7
const imageHeight = imageWidth
const BORDER_RADIUS = width / 30

export const styles = {
    CarouselCard__container:{
        width: imageWidth,
        margin: 0,
    },

    CarouselCard__image:{
        width: '100%',
        height: imageHeight * 0.8,
        resizeMode: 'cover',
        margin: 0,
        borderRadius: BORDER_RADIUS,
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
        elevation: 10,
        shadowColor: '#1b1915', 
        shadowOffset: {
            width: 10,
            height: 10
        }, 
        shadowRadius: 1,
    },

    CarouselCard__title:{
        fontWeight: '700',
        alignSelf: 'flex-start',
        letterSpacing: 1.1,
        textTransform: 'uppercase',
        paddingHorizontal: 15,
        paddingTop: 20,
        color: 'white',
        fontSize: 13                        
    },

    CarouselCard__description:{
        fontSize: 11,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 10,
        maxWidth: '90%',
        fontStyle: 'italic',
        color: '#ffffffbd',
        lineHeight: 14,
    },

    CarouselCard__white_mode:{
        backgroundColor:'white',
        color: 'black',
    },

}