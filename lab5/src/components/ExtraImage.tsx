import { useState } from 'react';

export default function ExtraImage() {
    const [url, setUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleLoad() {
        setIsLoading(true);
        setError('');

        try {
            const imageModule = await import('../assets/detail.jpg');
            setUrl(imageModule.default);
        } catch {
            setError('Не вдалося отримати ресурс. Спробуйте ще раз.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section>
            <h2>3. Додаткове зображення (динамічний імпорт)</h2>
            <button
                type="button"
                onClick={handleLoad}
                disabled={isLoading || url !== null}
            >
                {isLoading ? 'Завантаження…' : 'Показати зображення'}
            </button>

            {error && <p role="alert" className="error">{error}</p>}

            {url !== null && (
                <figure>
                    <img
                        src={url}
                        alt="Ілюстрація головного входу до корпусу з колонами"
                        onError={() => {
                            setUrl(null);
                            setError('Файл отримано, але зображення не відобразилося.');
                        }}
                    />
                    <figcaption>Файл src/assets/detail.jpg, отриманий через import().</figcaption>
                </figure>
            )}
        </section>
    );
}
