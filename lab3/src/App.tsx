import Heading from './components/Heading';
import Subject from './components/Subject';

export default function App() {
    return (
        <main className="page">
            <Heading firstName="Дмитро" lastName="Данько" group="ІПЗ-33" />

            <section aria-labelledby="subjects-title">
                <h2 id="subjects-title">Мої дисципліни</h2>

                <div className="subjects">
                    <Subject
                        subjectName="React Native"
                        description="Пишемо мобільні застосунки на React. Поки що все запускаємо в браузері."
                        credits={5}
                        semester={5}
                        teacher="Ірина Мельник"
                    />
                    <Subject
                        subjectName="Організація баз даних"
                        description="Таблиці, зв’язки, нормалізація і багато SQL. Ще й курсова."
                        credits={6}
                        semester={5}
                        teacher="Андрій Бондар"
                    />
                    <Subject
                        subjectName="Веб-програмування"
                        description="Лаби на Dart і Flutter, робимо невеликі застосунки."
                        credits={4}
                        semester={5}
                    />
                    <Subject
                        subjectName="Комп’ютерні мережі"
                        description="Як пристрої обмінюються даними: OSI, IP-адреси, маршрутизація."
                        credits={4}
                        semester={5}
                        teacher="Олег Ткаченко"
                    />
                </div>
            </section>
        </main>
    );
}
