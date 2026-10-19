import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { MenuItemRow } from '../components/MenuItemRow';
import { menuItems } from '../data/menu';
import type { Palette } from '../theme/palette';
import type { MenuItem } from '../types/menu';

type MenuFlatScreenProps = {
    colors: Palette;
    onSelectItem?: (item: MenuItem) => void;
};

export default function MenuFlatScreen({ colors, onSelectItem }: MenuFlatScreenProps) {
    const [query, setQuery] = useState('');

    const normalizedQuery = query.trim().toLocaleLowerCase('uk-UA');
    const visibleItems = menuItems.filter((item) =>
        item.name.toLocaleLowerCase('uk-UA').includes(normalizedQuery),
    );

    return (
        <View style={styles.screen}>
            <View style={[styles.searchBlock, { borderBottomColor: colors.border }]}>
                <Text style={[styles.label, { color: colors.text }]}>Пошук страви</Text>
                <TextInput
                    style={[
                        styles.input,
                        {
                            color: colors.text,
                            backgroundColor: colors.surface,
                            borderColor: colors.border,
                        },
                    ]}
                    value={query}
                    onChangeText={setQuery}
                    placeholder="Наприклад, салат"
                    placeholderTextColor={colors.muted}
                    accessibilityLabel="Пошук страви в меню"
                    autoCorrect={false}
                    returnKeyType="search"
                />
            </View>

            <FlatList<MenuItem>
                style={styles.list}
                contentContainerStyle={styles.content}
                data={visibleItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <MenuItemRow item={item} colors={colors} onPress={onSelectItem} />
                )}
                ItemSeparatorComponent={() => (
                    <View style={[styles.separator, { backgroundColor: colors.border }]} />
                )}
                ListHeaderComponent={<Text style={[styles.title, { color: colors.text }]}>Меню</Text>}
                ListEmptyComponent={
                    <Text style={[styles.empty, { color: colors.muted }]}>Нічого не знайдено.</Text>
                }
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    searchBlock: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 12,
        borderBottomWidth: 1,
    },
    label: {
        marginBottom: 6,
        fontSize: 16,
    },
    input: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 17,
    },
    list: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 20,
        paddingBottom: 24,
    },
    title: {
        marginTop: 16,
        marginBottom: 4,
        fontSize: 26,
        fontWeight: '700',
    },
    separator: {
        height: StyleSheet.hairlineWidth,
    },
    empty: {
        marginTop: 16,
        fontSize: 17,
    },
});
