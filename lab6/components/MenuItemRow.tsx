import { Pressable, StyleSheet, Text } from 'react-native';

import type { Palette } from '../theme/palette';
import type { MenuItem } from '../types/menu';

type MenuItemRowProps = {
    item: MenuItem;
    colors: Palette;
    onPress?: (item: MenuItem) => void;
};

export function MenuItemRow({ item, colors, onPress }: MenuItemRowProps) {
    return (
        <Pressable
            accessibilityRole={onPress ? 'button' : undefined}
            disabled={!onPress}
            onPress={() => onPress?.(item)}
            style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
        >
            <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
            <Text style={[styles.price, { color: colors.accent }]}>{item.price.toFixed(2)} грн</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 14,
    },
    rowPressed: {
        opacity: 0.6,
    },
    name: {
        flex: 1,
        fontSize: 18,
    },
    price: {
        fontSize: 17,
        fontWeight: '600',
    },
});
