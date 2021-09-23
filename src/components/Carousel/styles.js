import { Dimensions } from 'react-native'

const { width, height} = Dimensions.get('screen')
const SEPARATOR_SIZE = (width - (width * 0.7)) / 2

export const styles = {
    Carousel__content_container:{
        alignItems: "center",
    },

    Carousel__separator:{
        width: SEPARATOR_SIZE 
    },

    Carousel__snap_interval: width * 0.7
}