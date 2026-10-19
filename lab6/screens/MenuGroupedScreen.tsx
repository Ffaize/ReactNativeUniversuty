import { SectionList, StyleSheet, Text, View } from 'react-native';
import type { SectionListData } from 'react-native';

import { MenuItemRow } from '../components/MenuItemRow';
import { categories, menuItems } from '../data/menu';
import type { Palette } from '../theme/palette';
import type { CategoryInfo, MenuItem } from '../types/menu';

// секції будуються з тих самих даних, окремої копії меню немає
const sections: SectionListData<MenuItem, CategoryInfo>[] = categories.map((category) => ({
    ...category,
    data: menuItems.filter((item) => item.category === category.key),
}));

type MenuGroupedScreenProps = {
    colors: Palette;
};

export default function MenuGroupedScreen({ colors }: MenuGroupedScreenProps) {
    return (
        <SectionList<MenuItem, CategoryInfo>
            style={styles.list}
            contentContainerStyle={styles.content}
            sections={sections}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MenuItemRow item={item} colors={colors} />}
            renderSectionHeader={({ section }) => (
                <Text
                    style={[
                        styles.sectionTitle,
                        { backgroundColor: colors.background, color: colors.accent },
                    ]}
                >
                    {section.title}
                </Text>
            )}
            stickySectionHeadersEnabled={true}
            ItemSeparatorComponent={() => (
                <View style={[styles.separator, { backgroundColor: colors.border }]} />
            )}
            ListEmptyComponent={
                <Text style={[styles.empty, { color: colors.muted }]}>Меню поки порожнє.</Text>
            }
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
        fontSize: 22,
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
