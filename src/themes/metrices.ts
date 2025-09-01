import { Dimensions } from "react-native"

const { width, height } = Dimensions.get('window')

const metrices = {
    screenWidth: width,
    screenHeight: height,
}

export default metrices;