import { useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
} from 'react-native';

import type { Palette } from '../theme/palette';

type LoginScreenProps = {
    colors: Palette;
    onContinue: (email: string) => void;
};

export default function LoginScreen({ colors, onContinue }: LoginScreenProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    function handleContinue() {
        const normalizedEmail = email.trim();
        const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

        if (!emailLooksValid) {
            setError('Введіть email у форматі name@example.com.');
            return;
        }

        if (password.length === 0) {
            setError('Введіть навчальний пароль.');
            return;
        }

        setError(null);
        Keyboard.dismiss();
        setPassword('');
        onContinue(normalizedEmail);
    }

    const inputColors = {
        color: colors.text,
        backgroundColor: colors.surface,
        borderColor: colors.border,
    };

    return (
        <KeyboardAvoidingView
            style={styles.screen}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                contentContainerStyle={styles.form}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
            >
                <Text style={[styles.title, { color: colors.text }]}>Вхід до Little Lemon</Text>
                <Text style={[styles.text, { color: colors.muted }]}>
                    Навчальна форма: дані перевіряються лише локально і нікуди не надсилаються.
                    Використовуйте вигадані email і пароль.
                </Text>

                <Text style={[styles.label, { color: colors.text }]}>Email</Text>
                <TextInput
                    style={[styles.input, inputColors]}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="name@example.com"
                    placeholderTextColor={colors.muted}
                    accessibilityLabel="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                />

                <Text style={[styles.label, { color: colors.text }]}>Пароль</Text>
                <TextInput
                    style={[styles.input, inputColors]}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Ваш пароль"
                    placeholderTextColor={colors.muted}
                    accessibilityLabel="Пароль"
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="done"
                    submitBehavior="blurAndSubmit"
                />

                {error !== null && (
                    <Text style={[styles.message, { color: colors.error }]}>{error}</Text>
                )}

                <Pressable
                    accessibilityRole="button"
                    onPress={handleContinue}
                    style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: colors.accent },
                        pressed && styles.buttonPressed,
                    ]}
                >
                    <Text style={[styles.buttonText, { color: colors.onAccent }]}>
                        Увійти (демо)
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
    form: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 32,
    },
    title: {
        marginBottom: 8,
        fontSize: 26,
        fontWeight: '700',
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
    },
    label: {
        marginTop: 20,
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
    message: {
        fontSize: 16,
        lineHeight: 24,
        marginVertical: 12,
    },
    button: {
        minHeight: 48,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
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
