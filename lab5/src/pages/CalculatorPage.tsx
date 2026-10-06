import { useState } from 'react';

export default function CalculatorPage() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);
    const [error, setError] = useState('');

    // Повертає число з поля або null, якщо введення некоректне
    function getOperand(): number | null {
        if (input.trim() === '') {
            setError('Введіть число.');
            return null;
        }

        const operand = Number(input);
        if (!Number.isFinite(operand)) {
            setError('Введіть скінченне число.');
            return null;
        }

        return operand;
    }

    function saveResult(nextResult: number) {
        if (!Number.isFinite(nextResult)) {
            setError('Результат завеликий для обчислення.');
            return;
        }

        setResult(nextResult);
        setError('');
    }

    function handleAdd() {
        const operand = getOperand();
        if (operand === null) return;
        saveResult(result + operand);
    }

    function handleSubtract() {
        const operand = getOperand();
        if (operand === null) return;
        saveResult(result - operand);
    }

    function handleMultiply() {
        const operand = getOperand();
        if (operand === null) return;
        saveResult(result * operand);
    }

    function handleDivide() {
        const operand = getOperand();
        if (operand === null) return;

        if (operand === 0) {
            setError('На нуль ділити не можна.');
            return;
        }

        saveResult(result / operand);
    }

    function clearInput() {
        setInput('');
        setError('');
    }

    function resetResult() {
        setResult(0);
        setError('');
    }

    return (
        <section>
            <h1>Калькулятор</h1>
            <p className="result" aria-live="polite">Результат: {result}</p>

            <label htmlFor="operand">Число для операції</label>
            <input
                id="operand"
                type="number"
                step="any"
                value={input}
                onChange={event => {
                    setInput(event.currentTarget.value);
                    setError('');
                }}
            />

            {error && <p role="alert" className="error">{error}</p>}

            <div className="buttons">
                <button type="button" onClick={handleAdd}>Додати</button>
                <button type="button" onClick={handleSubtract}>Відняти</button>
                <button type="button" onClick={handleMultiply}>Помножити</button>
                <button type="button" onClick={handleDivide}>Поділити</button>
            </div>

            <div className="buttons">
                <button type="button" className="secondary" onClick={clearInput}>Очистити поле</button>
                <button type="button" className="secondary" onClick={resetResult}>Скинути результат</button>
            </div>
        </section>
    );
}
