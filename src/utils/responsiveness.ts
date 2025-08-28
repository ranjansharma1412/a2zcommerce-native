import { useWindowDimensions, PixelRatio } from 'react-native';

const BASE_WIDTH = 375;

export function useResponsive() {
    const { width: SCREEN_WIDTH } = useWindowDimensions();
    const scale = SCREEN_WIDTH / BASE_WIDTH;

    const responsiveFont = (size: number, factor = 0.5): number => {
        const newSize = size + (size * scale - size) * factor;
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    };

    const responsiveWidth = (size: number): number =>
        Math.round(PixelRatio.roundToNearestPixel(size * scale));

    const responsiveHeight = (size: number): number =>
        Math.round(PixelRatio.roundToNearestPixel((size * (SCREEN_WIDTH / BASE_WIDTH) * SCREEN_WIDTH) / SCREEN_WIDTH)); // approximate mimic using width scale

    return { responsiveFont, responsiveWidth, responsiveHeight };
}