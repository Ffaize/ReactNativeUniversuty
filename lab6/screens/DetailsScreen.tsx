import { ScrollView, StyleSheet, Text } from 'react-native';

import { categories, menuItems } from '../data/menu';
import type { Palette } from '../theme/palette';

type DetailsScreenProps = {
    colors: Palette;
    itemId: string;
};

export default function DetailsScreen({ colors, itemId }: DetailsScreenProps) {
    // шукаємо страву за id, а не передаємо весь об'єкт через параметри
    const item = menuItems.find((menuItem) => menuItem.id === itemId);

    if (!item) {
        return (
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={[styles.title, { color: colors.text }]}>Страву не знайдено</Text>
                <Text style={[styles.text, { color: colors.error }]}>
                    У меню немає страви з ідентифікатором «{itemId}».
                </Text>
            </ScrollView>
        );
    }

    const category = categories.find((c) => c.key === item.category);

    return (
        <ScrollView contentContainerStyle={styles.content}>
            <Text style={[styles.title, { color: colors.text }]}>{item.name}</Text>
            <Text style={[styles.price, { color: colors.accent }]}>{item.price.toFixed(2)} грн</Text>
            <Text style={[styles.text, { color: colors.muted }]}>
                Категорія: {category?.title ?? item.category}
            </Text>
            <Text style={[styles.text, { color: colors.muted }]}>Ідентифікатор: {item.id}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 32,
    },
    title: {
        marginBottom: 8,
        fontSize: 26,
        fontWeight: '700',
    },
    price: {
        marginBottom: 16,
        fontSize: 22,
        fontWeight: '600',
    },
    text: {
        marginBottom: 6,
        fontSize: 17,
        lineHeight: 26,
    },
});
