import { StyleSheet } from "react-native";
import { useResponsive } from "../../../utils/responsiveness";
import { COLORS } from "../../../themes/colors";

export const useStyles = () => {
  const { responsiveFont, responsiveWidth, responsiveHeight } = useResponsive();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.BLACK,
      paddingHorizontal: responsiveWidth(25),
      justifyContent: "center",
    },
    logoContainer: {
      alignItems: "center",
      marginBottom: responsiveHeight(30),
    },
    logoImg: {
      height: responsiveHeight(50),
      width: responsiveWidth(137),
      resizeMode: "contain",
    },
    logoText: {
      fontSize: responsiveFont(22),
      fontWeight: "700",
      color: COLORS.PRIMARY_ORANGE_COLOR,
      letterSpacing: 1,
    },
    title: {
      fontSize: responsiveFont(26),
      fontWeight: "700",
      color: COLORS.WHITE, 
      textAlign: "center",
      marginBottom: responsiveHeight(25),
    },
    inputWrapper: {
      marginBottom: responsiveHeight(15),
      borderRadius: 12,
      borderWidth: 1,
      borderColor: COLORS.SECONDARY_GRAPHITE_COLOR, 
      paddingHorizontal: responsiveWidth(10),
      backgroundColor: COLORS.PRIMARY_GRAPHITE_COLOR, 
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
    },
    rememberText: {
      fontSize: responsiveFont(14),
      color: COLORS.LIGHT_GREY, 
    },
    signUpButton: {
      backgroundColor: COLORS.PRIMARY_ORANGE_COLOR,
      borderRadius: 14,
      paddingVertical: responsiveHeight(14),
      marginTop: responsiveHeight(15),
    },
    signUpText: {
      fontSize: responsiveFont(16),
      fontWeight: "600",
      color: COLORS.WHITE, 
      textAlign: "center",
    },
    orText: {
      textAlign: "center",
      color: COLORS.LIGHT_GREY, 
      fontSize: responsiveFont(14),
      marginVertical: responsiveHeight(20),
    },
    socialRow: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: responsiveHeight(25),
    },
    socialButton: {
      width: responsiveHeight(50),
      height: responsiveWidth(50),
      borderRadius: 25,
      backgroundColor: COLORS.PRIMARY_GRAPHITE_COLOR, 
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 10,
      borderWidth: 1,
      borderColor: COLORS.SECONDARY_GRAPHITE_COLOR,
    },
    footerText: {
      textAlign: "center",
      fontSize: responsiveFont(14),
      color: COLORS.LIGHT_GREY,
    },
    signInLink: {
      color: COLORS.PRIMARY_ORANGE_COLOR, 
      fontWeight: "700",
    },
  });
};
