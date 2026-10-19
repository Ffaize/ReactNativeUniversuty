import { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    useWindowDimensions,
    View,
} from 'react-native';

import { NetworkLogo } from '../components/NetworkLogo';
import type { Palette } from '../theme/palette';

type WelcomeScreenProps = {
    colors: Palette;
    email: string;
    onExit: () => void;
};

export default function WelcomeScreen({ colors, email, onExit }: WelcomeScreenProps) {
    const [name, setName] = useState('');
    const { width } = useWindowDimensions();

    const wide = width >= 600;
    const trimmedName = name.trim();

    return (
        <KeyboardAvoidingView
            style={styles.screen}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                contentContainerStyle={styles.content}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
            >
                <View style={[styles.intro, { flexDirection: wide ? 'row' : 'column' }]}>
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                        accessible={true}
                        accessibilityLabel="Логотип Little Lemon"
                    />
                    <View style={styles.introText}>
                        <Text style={[styles.title, { color: colors.text }]}>
                            Ласкаво просимо до Little Lemon
                        </Text>
                        <Text style={[styles.note, { color: colors.muted }]}>
                            Дані перевірено локально. Відкрито навчальний екран для {email}.
                        </Text>
                    </View>
                </View>

                <Text style={[styles.label, { color: colors.text }]}>Ваше ім'я</Text>
                <TextInput
                    style={[
                        styles.input,
                        {
                            color: colors.text,
                            backgroundColor: colors.surface,
                            borderColor: colors.border,
                        },
                    ]}
                    value={name}
                    onChangeText={setName}
                    placeholder="Наприклад, Олена"
                    placeholderTextColor={colors.muted}
                    accessibilityLabel="Ваше ім'я"
                    returnKeyType="done"
                    submitBehavior="blurAndSubmit"
                />
                <Text style={[styles.greeting, { color: colors.accent }]}>
                    {trimmedName ? `Вітаємо, ${trimmedName}!` : "Введіть ім'я."}
                </Text>

                <Text style={[styles.text, { color: colors.text }]}>
                    Little Lemon — невелике сімейне бістро, де готують страви середземноморської
                    кухні за рецептами, які передаються в родині вже кілька поколінь.
                </Text>

                <Text style={[styles.heading, { color: colors.text }]}>Що ми готуємо</Text>
                <Text style={[styles.text, { color: colors.text }]}>
                    У нашому меню грецький салат зі свіжими овочами та фетою, брускети з томатами
                    й базиліком, паста з морепродуктами та запечена риба з лимоном. На десерт
                    радимо спробувати лимонний пиріг — фірмову страву закладу.
                </Text>

                <Text style={[styles.heading, { color: colors.text }]}>Графік роботи</Text>
                <Text style={[styles.text, { color: colors.text }]}>
                    Понеділок — п'ятниця: 10:00 – 22:00.{'\n'}
                    Субота та неділя: 11:00 – 23:00.
                </Text>

                <NetworkLogo colors={colors} uri="https://reactnative.dev/img/tiny_logo.png" />

                <Pressable
                    accessibilityRole="button"
                    onPress={onExit}
                    style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: colors.accent },
                        pressed && styles.buttonPressed,
                    ]}
                >
                    <Text style={[styles.buttonText, { color: colors.onAccent }]}>
                        Повернутися до форми
                    </Text>
                </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 32,
    },
    intro: {
        alignItems: 'center',
        gap: 16,
        marginBottom: 8,
    },
    logo: {
        width: 120,
        height: 140,
        alignSelf: 'center',
        marginBottom: 16,
    },
    introText: {
        flex: 1,
    },
    title: {
        marginBottom: 8,
        fontSize: 26,
        fontWeight: '700',
    },
    note: {
        fontSize: 16,
        lineHeight: 24,
    },
    label: {
        marginTop: 12,
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
    greeting: {
        marginTop: 12,
        marginBottom: 20,
        fontSize: 21,
        fontWeight: '600',
    },
    heading: {
        marginTop: 20,
        marginBottom: 6,
        fontSize: 20,
        fontWeight: '600',
    },
    text: {
        fontSize: 17,
        lineHeight: 26,
    },
    button: {
        minHeight: 48,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },
    buttonPressed: {
        opacity: 0.75,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});
