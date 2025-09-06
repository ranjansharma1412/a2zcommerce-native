import { StyleSheet } from "react-native";
import { useResponsive } from "@utils/responsiveness";
import { COLORS } from "../../themes/colors";

export const useButtonStyles = () => {
  const { responsiveFont, responsiveHeight, responsiveWidth } = useResponsive();

  return StyleSheet.create({
    button: {
      backgroundColor: COLORS.PRIMARY_ORANGE_COLOR,
      borderRadius: 14,
      paddingVertical: responsiveHeight(14),
      alignItems: "center",
      justifyContent: "center",
      shadowColor: COLORS.BLACK, 
    },
    text: {
      fontSize: responsiveFont(16),
      fontWeight: "600",
      color: COLORS.WHITE,
      textAlign: "center",
      letterSpacing: 0.5,
    },
  });
};
