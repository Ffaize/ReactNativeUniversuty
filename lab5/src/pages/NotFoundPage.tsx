import { Link } from 'react-router';

export default function NotFoundPage() {
    return (
        <section>
            <h1>Сторінку не знайдено</h1>
            <p>За цією адресою нічого немає.</p>
            <Link to="/">Повернутися на головну</Link>
        </section>
    );
}
