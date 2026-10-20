import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import type { Theme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DrawerFlow from './navigation/DrawerFlow';
import StackFlow from './navigation/StackFlow';
import TabsFlow from './navigation/TabsFlow';
import { darkColors, lightColors } from './theme/palette';

// вибір варіанта навігації: StackFlow, TabsFlow або DrawerFlow
const ActiveNavigator = StackFlow;

// теми навігатора з кольорами нашої палітри
const lightTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: lightColors.accent,
        background: lightColors.background,
        card: lightColors.surface,
        text: lightColors.text,
        border: lightColors.border,
    },
};

const darkTheme: Theme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: darkColors.accent,
        background: darkColors.background,
        card: darkColors.surface,
        text: darkColors.text,
        border: darkColors.border,
    },
};

export default function App() {
    const isDark = useColorScheme() === 'dark';

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <NavigationContainer theme={isDark ? darkTheme : lightTheme}>
                    <StatusBar style={isDark ? 'light' : 'dark'} />
                    <ActiveNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
    