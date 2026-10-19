import { SectionList, StyleSheet, Text, View } from 'react-native';
import type { SectionListData } from 'react-native';

import { MenuItemRow } from '../components/MenuItemRow';
import { categories, menuItems } from '../data/menu';
import type { CategoryInfo, MenuItem } from '../types/menu';

// секції будуються з тих самих даних, окремої копії меню немає
const sections: SectionListData<MenuItem, CategoryInfo>[] = categories.map((category) => ({
    ...category,
    data: menuItems.filter((item) => item.category === category.key),
}));

function Separator() {
    return <View style={styles.separator} />;
}

export default function MenuGroupedScreen() {
    return (
        <SectionList<MenuItem, CategoryInfo>
            style={styles.list}
            contentContainerStyle={styles.content}
            sections={sections}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MenuItemRow item={item} />}
            renderSectionHeader={({ section }) => (
                <Text style={styles.sectionTitle}>{section.title}</Text>
            )}
            stickySectionHeadersEnabled={true}
            ItemSeparatorComponent={Separator}
            ListEmptyComponent={<Text style={styles.empty}>Меню поки порожнє.</Text>}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 20,
        paddingBottom: 24,
    },
    sectionTitle: {
        paddingTop: 16,
        paddingBottom: 8,
        backgroundColor: '#495E57',
        color: '#F4CE14',
        fontSize: 22,
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
