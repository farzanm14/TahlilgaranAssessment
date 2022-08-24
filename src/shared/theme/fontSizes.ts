import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => width / guidelineBaseWidth * size;
const verticalScale = (size: number) => height / guidelineBaseHeight * size;
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

export default {
    verySmall: moderateScale(10),
    small: moderateScale(12),
    medium: moderateScale(14),
    large: moderateScale(16),
    xLarge: moderateScale(18),
    xxLarge: moderateScale(20),
    xxxLarge: moderateScale(22)
};
