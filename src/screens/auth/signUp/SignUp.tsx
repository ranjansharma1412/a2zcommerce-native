import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import { Fontisto } from "@react-native-vector-icons/fontisto";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@react-native-vector-icons/feather";
import { useStyles } from "./SignUpStyle";
import InputField from "@components/InputField/InputField";
import Button from "@components/Button/Button";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const SignUp: React.FC = () => {
    const styles = useStyles();

    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <SafeAreaView style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logoImg}
                    source={require("../../../assets/logo/logo.png")}
                />
                <Text style={styles.logoText}>Commerce</Text>
            </View>

            {/* Title */}
            <Text style={styles.title}>Create Your Account</Text>

            {/* Email Input */}
            <InputField
                placeholder="Email"
                keyboardType="email-address"
                leftIcon={<Fontisto name="email" size={20} color="#C0C0C0" />}
                containerStyle={styles.inputWrapper}
            />

            {/* Password Input */}
            <InputField
                placeholder="Password"
                secureTextEntry={!showPassword}
                leftIcon={<Fontisto name="locked" size={20} color="#C0C0C0" />}
                rightIcon={
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Feather
                            name={showPassword ? "eye" : "eye-off"}
                            size={20}
                            color="#C0C0C0"
                        />
                    </TouchableOpacity>
                }
                containerStyle={styles.inputWrapper}
            />

            {/* Remember Me */}
            <Button
                style={styles.rememberContainer}
                onPress={() => setRememberMe(!rememberMe)}
            >
                <View
                    style={[
                        styles.checkbox,
                        { backgroundColor: rememberMe ? "#FF6B1A" : "transparent" },
                    ]}
                />
                <Text style={styles.rememberText}>Remember me</Text>
            </Button>

            {/* Sign Up Button */}
            <Button
                title="Sign up"
                style={styles.signUpButton}
                textStyle={styles.signUpText}
            />

            {/* Social Login */}
            <Text style={styles.orText}>or continue with</Text>
            <View style={styles.socialRow}>
                <Button style={styles.socialButton}>
                    <FontAwesome name="facebook" size={22} color="#4267B2" />
                </Button>

                <Button style={styles.socialButton}>
                    <FontAwesome name="google" size={22} color="#EA4335" />
                </Button>

                <Button style={styles.socialButton}>
                    <FontAwesome name="apple" size={22} color="#FFF" />
                </Button>
            </View>
            {/* Already have account */}
            <Text style={styles.footerText}>
                Already have an account?{" "}
                <Text style={styles.signInLink}>Sign in</Text>
            </Text>
        </SafeAreaView>
    );
};

export default SignUp;
