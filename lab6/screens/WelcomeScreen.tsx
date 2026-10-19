import { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
} from 'react-native';

export default function WelcomeScreen() {
    const [name, setName] = useState('');

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
                indicatorStyle="white"
            >
                <Text style={styles.title}>Ласкаво просимо до Little Lemon</Text>

                <Text style={styles.label}>Ваше ім'я</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Наприклад, Олена"
                    placeholderTextColor="#9FB0A8"
                    accessibilityLabel="Ваше ім'я"
                    returnKeyType="done"
                    submitBehavior="blurAndSubmit"
                />
                <Text style={styles.greeting}>
                    {trimmedName ? `Вітаємо, ${trimmedName}!` : "Введіть ім'я."}
                </Text>

                <Text style={styles.text}>
                    Little Lemon — невелике сімейне бістро, де готують страви середземноморської
                    кухні за рецептами, які передаються в родині вже кілька поколінь.
                </Text>

                <Text style={styles.heading}>Що ми готуємо</Text>
                <Text style={styles.text}>
                    У нашому меню грецький салат зі свіжими овочами та фетою, брускети з томатами
                    й базиліком, паста з морепродуктами та запечена риба з лимоном. На десерт
                    радимо спробувати лимонний пиріг — фірмову страву закладу.
                </Text>

                <Text style={styles.heading}>Чим ми вирізняємося</Text>
                <Text style={styles.text}>
                    Ми купуємо овочі та зелень у місцевих фермерів, тому меню трохи змінюється
                    залежно від сезону. Хліб випікаємо щоранку, а соуси готуємо самі, без готових
                    сумішей.
                </Text>

                <Text style={styles.heading}>Графік роботи</Text>
                <Text style={styles.text}>
                    Понеділок — п'ятниця: 10:00 – 22:00.{'\n'}
                    Субота та неділя: 11:00 – 23:00.{'\n'}
                    Столик на вечір краще бронювати заздалегідь.
                </Text>
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
    title: {
        marginBottom: 16,
        color: '#F4CE14',
        fontSize: 26,
        fontWeight: '700',
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
    greeting: {
        marginTop: 12,
        marginBottom: 20,
        color: '#F4CE14',
        fontSize: 21,
        fontWeight: '600',
    },
    heading: {
        marginTop: 20,
        marginBottom: 6,
        color: '#EE9972',
        fontSize: 20,
        fontWeight: '600',
    },
    text: {
        color: '#EDEFEE',
        fontSize: 17,
        lineHeight: 26,
    },
});
