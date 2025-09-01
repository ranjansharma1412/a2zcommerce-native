[1mdiff --git a/.eslintrc.js b/.eslintrc.js[m
[1mindex cd43f3a..187894b 100644[m
[1m--- a/.eslintrc.js[m
[1m+++ b/.eslintrc.js[m
[36m@@ -1,24 +1,4 @@[m
 module.exports = {[m
   root: true,[m
[31m-<<<<<<< HEAD[m
[31m-  extends: [[m
[31m-    '@react-native',[m
[31m-    'eslint:recommended',[m
[31m-    'plugin:react/recommended',[m
[31m-    'plugin:@typescript-eslint/recommended', // if TS[m
[31m-    'prettier',[m
[31m-  ],[m
[31m-  plugins: ['unused-imports'],[m
[31m-  rules: {[m
[31m-    'no-unused-vars': 'off',[m
[31m-    '@typescript-eslint/no-unused-vars': 'off',[m
[31m-    'unused-imports/no-unused-imports': 'error', // remove unused imports[m
[31m-    'unused-imports/no-unused-vars': [[m
[31m-      'warn',[m
[31m-      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },[m
[31m-    ],[m
[31m-  },[m
[31m-=======[m
   extends: '@react-native',[m
[31m->>>>>>> feature/SignIn[m
 };[m
[1mdiff --git a/App.tsx b/App.tsx[m
[1mindex cde0663..ced2e25 100644[m
[1m--- a/App.tsx[m
[1m+++ b/App.tsx[m
[36m@@ -12,22 +12,12 @@[m [mimport {[m
   SafeAreaProvider,[m
 } from 'react-native-safe-area-context';[m
 import { Provider } from 'react-redux';[m
[31m-<<<<<<< HEAD[m
[31m-=======[m
 import SignIn from '@screens/auth/signIn/SignIn';[m
 import SignUp from '@screens/auth/signUp/SignUp';[m
[31m->>>>>>> feature/SignIn[m
 [m
 function App() {[m
   const isDarkMode = useColorScheme() === 'dark';[m
 [m
[31m-<<<<<<< HEAD[m
[31m-  return ([m
[31m-    <Provider store={store}>[m
[31m-      <SafeAreaProvider>[m
[31m-        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />[m
[31m-        <RootNavigation />[m
[31m-=======[m
   return ( [m
     <Provider store={store}>[m
       <SafeAreaProvider>[m
[36m@@ -35,7 +25,6 @@[m [mfunction App() {[m
         <RootNavigation /> */}[m
         {/* <SignIn/> */}[m
         <SignUp/>[m
[31m->>>>>>> feature/SignIn[m
       </SafeAreaProvider>[m
     </Provider>[m
   );[m
[1mdiff --git a/android/app/build.gradle b/android/app/build.gradle[m
[1mindex 62fc15f..6aa6d4a 100644[m
[1m--- a/android/app/build.gradle[m
[1m+++ b/android/app/build.gradle[m
[36m@@ -117,7 +117,4 @@[m [mdependencies {[m
         implementation jscFlavor[m
     }[m
 }[m
[31m-<<<<<<< HEAD[m
[31m-=======[m
 apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"[m
[31m->>>>>>> feature/SignIn[m
[1mdiff --git a/android/gradlew b/android/gradlew[m
[1mold mode 100755[m
[1mnew mode 100644[m
[1mdiff --git a/android/gradlew.bat b/android/gradlew.bat[m
[1mindex 5d0a415..dd2b8ee 100644[m
[1m--- a/android/gradlew.bat[m
[1m+++ b/android/gradlew.bat[m
[36m@@ -1,104 +1,3 @@[m
[31m-<<<<<<< HEAD[m
[31m-@REM Copyright (c) Meta Platforms, Inc. and affiliates.[m
[31m-@REM[m
[31m-@REM This source code is licensed under the MIT license found in the[m
[31m-@REM LICENSE file in the root directory of this source tree.[m
[31m-[m
[31m-@rem[m
[31m-@rem Copyright 2015 the original author or authors.[m
[31m-@rem[m
[31m-@rem Licensed under the Apache License, Version 2.0 (the "License");[m
[31m-@rem you may not use this file except in compliance with the License.[m
[31m-@rem You may obtain a copy of the License at[m
[31m-@rem[m
[31m-@rem      https://www.apache.org/licenses/LICENSE-2.0[m
[31m-@rem[m
[31m-@rem Unless required by applicable law or agreed to in writing, software[m
[31m-@rem distributed under the License is distributed on an "AS IS" BASIS,[m
[31m-@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.[m
[31m-@rem See the License for the specific language governing permissions and[m
[31m-@rem limitations under the License.[m
[31m-@rem[m
[31m-@rem SPDX-License-Identifier: Apache-2.0[m
[31m-@rem[m
[31m-[m
[31m-@if "%DEBUG%"=="" @echo off[m
[31m-@rem ##########################################################################[m
[31m-@rem[m
[31m-@rem  Gradle startup script for Windows[m
[31m-@rem[m
[31m-@rem ##########################################################################[m
[31m-[m
[31m-@rem Set local scope for the variables with windows NT shell[m
[31m-if "%OS%"=="Windows_NT" setlocal[m
[31m-[m
[31m-set DIRNAME=%~dp0[m
[31m-if "%DIRNAME%"=="" set DIRNAME=.[m
[31m-@rem This is normally unused[m
[31m-set APP_BASE_NAME=%~n0[m
[31m-set APP_HOME=%DIRNAME%[m
[31m-[m
[31m-@rem Resolve any "." and ".." in APP_HOME to make it shorter.[m
[31m-for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi[m
[31m-[m
[31m-@rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.[m
[31m-set DEFAULT_JVM_OPTS="-Xmx64m" "-Xms64m"[m
[31m-[m
[31m-@rem Find java.exe[m
[31m-if defined JAVA_HOME goto findJavaFromJavaHome[m
[31m-[m
[31m-set JAVA_EXE=java.exe[m
[31m-%JAVA_EXE% -version >NUL 2>&1[m
[31m-if %ERRORLEVEL% equ 0 goto execute[m
[31m-[m
[31m-echo. 1>&2[m
[31m-echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH. 1>&2[m
[31m-echo. 1>&2[m
[31m-echo Please set the JAVA_HOME variable in your environment to match the 1>&2[m
[31m-echo location of your Java installation. 1>&2[m
[31m-[m
[31m-goto fail[m
[31m-[m
[31m-:findJavaFromJavaHome[m
[31m-set JAVA_HOME=%JAVA_HOME:"=%[m
[31m-set JAVA_EXE=%JAVA_HOME%/bin/java.exe[m
[31m-[m
[31m-if exist "%JAVA_EXE%" goto execute[m
[31m-[m
[31m-echo. 1>&2[m
[31m-echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME% 1>&2[m
[31m-echo. 1>&2[m
[31m-echo Please set the JAVA_HOME variable in your environment to match the 1>&2[m
[31m-echo location of your Java installation. 1>&2[m
[31m-[m
[31m-goto fail[m
[31m-[m
[31m-:execute[m
[31m-@rem Setup the command line[m
[31m-[m
[31m-set CLASSPATH=[m
[31m-[m
[31m-[m
[31m-@rem Execute Gradle[m
[31m-"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" -jar "%APP_HOME%\gradle\wrapper\gradle-wrapper.jar" %*[m
[31m-[m
[31m-:end[m
[31m-@rem End local scope for the variables with windows NT shell[m
[31m-if %ERRORLEVEL% equ 0 goto mainEnd[m
[31m-[m
[31m-:fail[m
[31m-rem Set variable GRADLE_EXIT_CONSOLE if you need the _script_ return code instead of[m
[31m-rem the _cmd.exe /c_ return code![m
[31m-set EXIT_CODE=%ERRORLEVEL%[m
[31m-if %EXIT_CODE% equ 0 set EXIT_CODE=1[m
[31m-if not ""=="%GRADLE_EXIT_CONSOLE%" exit %EXIT_CODE%[m
[31m-exit /b %EXIT_CODE%[m
[31m-[m
[31m-:mainEnd[m
[31m-if "%OS%"=="Windows_NT" endlocal[m
[31m-[m
[31m-:omega[m
[31m-=======[m
 @REM Copyright (c) Meta Platforms, Inc. and affiliates.[m
 @REM[m
 @REM This source code is licensed under the MIT license found in the[m
[36m@@ -198,4 +97,3 @@[m [mexit /b %EXIT_CODE%[m
 if "%OS%"=="Windows_NT" endlocal[m
 [m
 :omega[m
[31m->>>>>>> feature/SignIn[m
[1mdiff --git a/babel.config.js b/babel.config.js[m
[1mindex 48a002a..e131345 100644[m
[1m--- a/babel.config.js[m
[1m+++ b/babel.config.js[m
[36m@@ -10,17 +10,9 @@[m [mmodule.exports = {[m
         '@components': './src/components',[m
         '@screens': './src/screens',[m
         '@utils': './src/utils',[m
[31m-<<<<<<< HEAD[m
[31m-        '@assets': './src/assets',[m
[31m-        '@redux': './src/redux',[m
[31m-        '@themes': './src/themes',[m
[31m-        '@models': './src/models',[m
[31m-        '@httpHelper': './src/httpHelper'[m
[31m-=======[m
         '@redux': './src/redux',[m
         '@themes': './src/themes',[m
         '@models': './src/models'[m
[31m->>>>>>> feature/SignIn[m
       }[m
     },[m
     ],[m
[1mdiff --git a/eslint.config.mts b/eslint.config.mts[m
[1mdeleted file mode 100644[m
[1mindex 673b075..0000000[m
[1m--- a/eslint.config.mts[m
[1m+++ /dev/null[m
[36m@@ -1,11 +0,0 @@[m
[31m-import js from "@eslint/js";[m
[31m-import globals from "globals";