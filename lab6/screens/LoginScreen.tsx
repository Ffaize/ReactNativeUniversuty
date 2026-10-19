import { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
} from 'react-native';

function isEmailFormatValid(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);

    function handleEmailBlur() {
        // setEmail не змінює email одразу, тому перевіряємо локальну змінну
        const normalized = email.trim();
        setEmail(normalized);
        setEmailTouched(true);
    }

    let emailMessage = '';
    if (emailTouched || email.length > 0) {
        if (email.trim() === '') {
            emailMessage = 'Введіть email.';
        } else if (!isEmailFormatValid(email)) {
            emailMessage = 'Email має бути у форматі name@example.com.';
        } else {
            emailMessage = 'Формат email виглядає правильно.';
        }
    }

    const emailOk = isEmailFormatValid(email);
    const passwordOk = password.length > 0;

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
                <Text style={styles.title}>Вхід до Little Lemon</Text>
                <Text style={styles.text}>
                    Навчальна форма: дані перевіряються лише локально і нікуди не надсилаються.
                </Text>

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    onBlur={handleEmailBlur}
                    placeholder="name@example.com"
                    placeholderTextColor="#9FB0A8"
                    accessibilityLabel="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                />
                {emailMessage !== '' && (
                    <Text style={emailOk ? styles.hintOk : styles.hintError}>{emailMessage}</Text>
                )}

                <Text style={styles.label}>Пароль</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Ваш пароль"
                    placeholderTextColor="#9FB0A8"
                    accessibilityLabel="Пароль"
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="done"
                    submitBehavior="blurAndSubmit"
                />
                <Text style={passwordOk ? styles.hintOk : styles.hint}>
                    {passwordOk ? 'Пароль введено.' : 'Пароль ще не введено.'}
                </Text>

                <Text style={styles.status}>
                    {emailOk && passwordOk
                        ? 'Обидва поля заповнено. Дані перевірено локально.'
                        : 'Заповніть email і пароль.'}
                </Text>
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
        color: '#F4CE14',
        fontSize: 26,
        fontWeight: '700',
    },
    text: {
        color: '#EDEFEE',
        fontSize: 16,
        lineHeight: 24,
    },
    label: {
        marginTop: 20,
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
    hint: {
        marginTop: 6,
        color: '#C9D3CE',
        fontSize: 14,
    },
    hintOk: {
        marginTop: 6,
        color: '#A8E6B0',
        fontSize: 14,
    },
    hintError: {
        marginTop: 6,
        color: '#FFB4AB',
        fontSize: 14,
    },
    status: {
        marginTop: 24,
        color: '#EDEFEE',
        fontSize: 16,
        lineHeight: 24,
    },
});
