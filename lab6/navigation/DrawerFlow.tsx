import { createDrawerNavigator } from '@react-navigation/drawer';
import type { DrawerScreenProps } from '@react-navigation/drawer';

import { ScreenFrame } from '../components/ScreenFrame';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { useAppColors } from '../theme/useAppColors';
import type { DrawerParamList } from './types';

const Drawer = createDrawerNavigator<DrawerParamList>();

type LoginProps = DrawerScreenProps<DrawerParamList, 'Login'>;
type WelcomeProps = DrawerScreenProps<DrawerParamList, 'Welcome'>;

function LoginRoute({ navigation }: LoginProps) {
    const colors = useAppColors();
    return (
        <ScreenFrame colors={colors} bottomInset>
            <LoginScreen
                colors={colors}
                onContinue={(email) => navigation.navigate('Welcome', { email })}
            />
        </ScreenFrame>
    );
}

function WelcomeRoute({ navigation, route }: WelcomeProps) {
    const colors = useAppColors();
    return (
        <ScreenFrame colors={colors} bottomInset>
            <WelcomeScreen
                colors={colors}
                email={route.params?.email ?? 'Гість'}
                onExit={() => navigation.navigate('Login')}
            />
        </ScreenFrame>
    );
}

export default function DrawerFlow() {
    const colors = useAppColors();

    return (
        <Drawer.Navigator
            initialRouteName="Login"
            screenOptions={{
                drawerPosition: 'left',
                drawerActiveTintColor: colors.text,
                drawerActiveBackgroundColor: colors.accent,
                drawerInactiveTintColor: colors.muted,
            }}
        >
            <Drawer.Screen
                name="Login"
                component={LoginRoute}
                options={{ title: 'Навчальна форма', drawerLabel: 'Форма' }}
            />
            <Drawer.Screen
                name="Welcome"
                component={WelcomeRoute}
                options={{ title: 'Привітання', drawerLabel: 'Привітання' }}
            />
        </Drawer.Navigator>
    );
}
