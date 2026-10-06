import { useState } from 'react';
import campusUrl from '../assets/campus.jpg';
import ExtraImage from '../components/ExtraImage';

const externalImageUrl = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=960&q=80';
const videoId = 'Tn6-PIqc4UM';

export default function MediaPage() {
    const [externalFailed, setExternalFailed] = useState(false);

    return (
        <section>
            <h1>Зображення і відео</h1>

            <section>
                <h2>1. Локальне зображення</h2>
                <figure>
                    <img src={campusUrl} alt="Ілюстрація триповерхового навчального корпусу з деревами біля входу" />
                    <figcaption>Локальний файл із src/assets (статичний імпорт).</figcaption>
                </figure>
            </section>

            <section>
                <h2>2. Зовнішнє зображення</h2>
                {externalFailed ? (
                    <p role="status" className="error">
                        Не вдалося завантажити зовнішнє зображення. Перевірте інтернет.
                    </p>
                ) : (
                    <img
                        src={externalImageUrl}
                        alt="Будівля університетського кампусу"
                        loading="lazy"
                        onError={() => setExternalFailed(true)}
                    />
                )}
                <p className="caption">
                    Джерело:{' '}
                    <a href={externalImageUrl} target="_blank" rel="noopener noreferrer">
                        фото з Unsplash
                    </a>
                </p>
            </section>

            <ExtraImage />

            <section>
                <h2>4. Відео</h2>
                <iframe
                    className="video-frame"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="React in 100 Seconds — коротке відео про React від Fireship"
                    loading="lazy"
                    allow="encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                />
                <p className="caption">
                    Джерело: YouTube, канал Fireship.{' '}
                    <a
                        href={`https://www.youtube.com/watch?v=${videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Відкрити відео на YouTube
                    </a>
                </p>
            </section>
        </section>
    );
}
