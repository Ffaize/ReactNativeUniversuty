import { StyleSheet, Text, View } from 'react-native';

export function LittleLemonFooter() {
    const year = new Date().getFullYear();

    return (
        <View style={styles.footer}>
            <Text style={styles.text}>© {year} Little Lemon</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: '#333333',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'center',
    },
});
