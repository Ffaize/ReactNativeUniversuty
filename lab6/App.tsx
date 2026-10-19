import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { LittleLemonHeader } from './components/LittleLemonHeader';
import { LittleLemonFooter } from './components/LittleLemonFooter';
import MenuFlatScreen from './screens/MenuFlatScreen';
import MenuGroupedScreen from './screens/MenuGroupedScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

// для перевірки підставляємо по черзі:
// MenuFlatScreen, MenuGroupedScreen, WelcomeScreen, LoginScreen
const ActiveScreen = MenuFlatScreen;

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
                <StatusBar style="light" />
                <LittleLemonHeader />
                <View style={styles.content}>
                    <ActiveScreen />
                </View>
                <LittleLemonFooter />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#495E57',
    },
    content: {
        flex: 1,
    },
});
