import { StyleSheet } from "react-native";
import { useResponsive } from "../../../utils/responsiveness";
import { useCommonStyles } from "../../../commonStyles/CommonStyle";

export const useStyles = () => {
  const { responsiveHeight } = useResponsive();
  const commonStyles = useCommonStyles();

  return {
    ...commonStyles,
    ...StyleSheet.create({
      signUpButton: {
        ...commonStyles.primaryButton,
        marginTop: responsiveHeight(15),
      },
      signUpText: commonStyles.primaryButtonText,
      orText: commonStyles.dividerText,
      signInLink: commonStyles.linkText,
      rememberText: commonStyles.secondaryText,
    })
  };
};
