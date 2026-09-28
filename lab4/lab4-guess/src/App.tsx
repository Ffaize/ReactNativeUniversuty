export default function App() {
    function handleClick() {
        const input = window.prompt('Введіть ціле число від 1 до 5');

        if (input === null) return;

        if (input.trim() === '') {
            window.alert('Ви не ввели число');
            return;
        }

        const userNumber = Number(input);

        if (!Number.isInteger(userNumber) || userNumber < 1 || userNumber > 5) {
            window.alert('Потрібно ввести ціле число від 1 до 5');
            return;
        }

        const computerNumber = Math.floor(Math.random() * 5) + 1;

        let result = 'Спробуйте ще раз';
        if (userNumber === computerNumber) {
            result = 'Ви вгадали!';
        }

        window.alert(`Ви вказали число: ${userNumber}, число комп’ютера: ${computerNumber}. ${result}`);
    }

    return (
        <main className="page">
            <div className="card">
                <h1>Вгадай число</h1>
                <p>Вкажіть будь-яке число від 1 до 5</p>
                <button type="button" onClick={handleClick}>
                    Почати
                </button>
            </div>
        </main>
    );
}
