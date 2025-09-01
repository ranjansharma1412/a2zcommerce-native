import { StyleSheet } from "react-native";
import { useResponsive } from "@utils/responsiveness";
import { COLORS } from "../../themes/colors";

export const useInputFieldStyles = () => {
  const { responsiveFont, responsiveHeight, responsiveWidth } = useResponsive();

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 12,
      borderWidth: 1,
      borderColor: COLORS.SECONDARY_GRAPHITE_COLOR,
      backgroundColor: COLORS.PRIMARY_GRAPHITE_COLOR,
      paddingHorizontal: responsiveWidth(10),
      paddingVertical: responsiveHeight(5),
    },
    input: {
      flex: 1,
      fontSize: responsiveFont(15),
      color: COLORS.WHITE,
      paddingHorizontal: responsiveWidth(8),
      paddingVertical: responsiveHeight(8),
    },
  });
};
