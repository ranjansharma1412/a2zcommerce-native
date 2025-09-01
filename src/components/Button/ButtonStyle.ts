import { StyleSheet } from "react-native";
import { useResponsive } from "@utils/responsiveness";
import { COLORS } from "../../themes/colors";

export const useButtonStyles = () => {
  const { responsiveFont, responsiveHeight,responsiveWidth } = useResponsive();

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
    rememberContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: responsiveHeight(10),
    },
    checkbox: {
      width: responsiveWidth(18),
      height: responsiveHeight(18),
      borderRadius: 4,
      borderWidth: 1,
      borderColor: COLORS.LIGHT_GREY,
      marginRight: 8,
    },
    rememberText: {
      fontSize: responsiveFont(14),
      color: COLORS.LIGHT_GREY,
    },
  });
};
