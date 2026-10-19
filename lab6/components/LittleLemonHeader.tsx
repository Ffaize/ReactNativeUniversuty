import { StyleSheet, Text, View } from 'react-native';

import type { Palette } from '../theme/palette';

type LittleLemonHeaderProps = {
    colors: Palette;
};

export function LittleLemonHeader({ colors }: LittleLemonHeaderProps) {
    return (
        <View
            style={[
                styles.header,
                { backgroundColor: colors.surface, borderBottomColor: colors.accent },
            ]}
        >
            <Text style={[styles.title, { color: colors.text }]}>Little Lemon</Text>
            <Text style={[styles.subtitle, { color: colors.muted }]}>Середземноморське бістро</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 14,
        borderBottomWidth: 3,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
    },
    subtitle: {
        marginTop: 2,
        fontSize: 16,
    },
});
