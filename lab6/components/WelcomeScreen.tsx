import { StyleSheet, Text, View } from 'react-native';

export function WelcomeScreen() {
    return (
        <View>
            <Text style={styles.title}>Ласкаво просимо до Little Lemon</Text>

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

            <Text style={styles.heading}>Для кого ми працюємо</Text>
            <Text style={styles.text}>
                До нас заходять на швидкий обід між парами чи роботою, на спокійну вечерю з
                родиною або на каву з друзями. Для дітей є окреме невелике меню.
            </Text>

            <Text style={styles.heading}>Графік роботи</Text>
            <Text style={styles.text}>
                Понеділок — п'ятниця: 10:00 – 22:00.{'\n'}
                Субота та неділя: 11:00 – 23:00.{'\n'}
                Столик на вечір краще бронювати заздалегідь.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 16,
        color: '#F4CE14',
        fontSize: 26,
        fontWeight: '700',
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
