import { StyleSheet, Text, View } from 'react-native';

export function LittleLemonHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Little Lemon</Text>
            <Text style={styles.subtitle}>Середземноморське бістро</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 14,
        backgroundColor: '#F4CE14',
    },
    title: {
        color: '#333333',
        fontSize: 30,
        fontWeight: '700',
    },
    subtitle: {
        marginTop: 2,
        color: '#495E57',
        fontSize: 16,
    },
});
