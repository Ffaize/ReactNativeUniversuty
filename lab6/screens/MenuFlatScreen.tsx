import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { MenuItemRow } from '../components/MenuItemRow';
import { menuItems } from '../data/menu';
import type { MenuItem } from '../types/menu';

function Separator() {
    return <View style={styles.separator} />;
}

export default function MenuFlatScreen() {
    const [query, setQuery] = useState('');

    const normalizedQuery = query.trim().toLocaleLowerCase('uk-UA');
    const visibleItems = menuItems.filter((item) =>
        item.name.toLocaleLowerCase('uk-UA').includes(normalizedQuery),
    );

    return (
        <View style={styles.screen}>
            <View style={styles.searchBlock}>
                <Text style={styles.label}>Пошук страви</Text>
                <TextInput
                    style={styles.input}
                    value={query}
                    onChangeText={setQuery}
                    placeholder="Наприклад, салат"
                    placeholderTextColor="#9FB0A8"
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
                renderItem={({ item }) => <MenuItemRow item={item} />}
                ItemSeparatorComponent={Separator}
                ListHeaderComponent={<Text style={styles.title}>Меню</Text>}
                ListEmptyComponent={<Text style={styles.empty}>Нічого не знайдено.</Text>}
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
        borderBottomColor: '#5F7770',
    },
    label: {
        marginBottom: 6,
        color: '#EDEFEE',
        fontSize: 16,
    },
    input: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#9FB0A8',
        borderRadius: 8,
        color: '#FFFFFF',
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
        color: '#F4CE14',
        fontSize: 26,
        fontWeight: '700',
    },
    separator: {
        height: 1,
        backgroundColor: '#5F7770',
    },
    empty: {
        marginTop: 16,
        color: '#EDEFEE',
        fontSize: 17,
    },
});
