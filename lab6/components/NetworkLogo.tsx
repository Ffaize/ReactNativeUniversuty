import { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

import type { Palette } from '../theme/palette';

type LoadStatus = 'loading' | 'ready' | 'error';

type NetworkLogoProps = {
    colors: Palette;
    uri: string;
};

// додаткове завдання: зображення з мережі зі станом завантаження
export function NetworkLogo({ colors, uri }: NetworkLogoProps) {
    const [status, setStatus] = useState<LoadStatus>('loading');

    return (
        <View style={[styles.box, { borderColor: colors.border }]}>
            <Image
                source={{ uri }}
                style={styles.image}
                resizeMode="contain"
                accessibilityLabel="Логотип React Native з мережі"
                onLoadStart={() => setStatus('loading')}
                onLoad={() => setStatus('ready')}
                onError={() => setStatus('error')}
            />
            <View style={styles.info}>
                {status === 'loading' && <ActivityIndicator color={colors.accent} />}
                <Text style={[styles.text, { color: status === 'error' ? colors.error : colors.muted }]}>
                    {status === 'loading' && 'Завантаження зображення…'}
                    {status === 'ready' && 'Зображення з мережі завантажено.'}
                    {status === 'error' && 'Не вдалося завантажити зображення. Перевірте мережу.'}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginTop: 24,
        padding: 12,
        borderWidth: 1,
        borderRadius: 8,
    },
    image: {
        width: 56,
        height: 56,
    },
    info: {
        flex: 1,
        gap: 6,
    },
    text: {
        fontSize: 15,
        lineHeight: 22,
    },
});
