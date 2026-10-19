import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { Palette } from '../theme/palette';
import { LittleLemonFooter } from './LittleLemonFooter';

type ScreenFrameProps = {
    colors: Palette;
    // у вкладках нижній відступ уже дає панель вкладок
    bottomInset: boolean;
    children: ReactNode;
};

// вміст екрана + підвал; верхній відступ дає заголовок навігатора
export function ScreenFrame({ colors, bottomInset, children }: ScreenFrameProps) {
    return (
        <SafeAreaView
            style={[styles.screen, { backgroundColor: colors.background }]}
            edges={bottomInset ? ['bottom'] : []}
        >
            <View style={styles.content}>{children}</View>
            <LittleLemonFooter colors={colors} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
});
