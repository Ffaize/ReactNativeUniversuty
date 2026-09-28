import { useState } from 'react';

type TextInputProps = {
    value: string;
    onTextChange: (text: string) => void;
};

export default function TextInput({ value, onTextChange }: TextInputProps) {
    const [submittedText, setSubmittedText] = useState('');
    const [error, setError] = useState('');

    return (
        <div className="card">
            <h2>Text input</h2>
            <form
                onSubmit={event => {
                    event.preventDefault();

                    if (value.trim() === '') {
                        setError('Спочатку введіть якийсь текст');
                        return;
                    }

                    setError('');
                    setSubmittedText(value);
                }}
            >
                <label>
                    Текст:
                    <input
                        value={value}
                        maxLength={50}
                        onChange={event => onTextChange(event.currentTarget.value)}
                    />
                </label>
                <span className="limit">{value.length}/50</span>
                <button type="submit">Submit</button>
            </form>

            {error !== '' && <p role="alert" className="error">{error}</p>}
            <p>Підтверджений текст: <b>{submittedText}</b></p>
        </div>
    );
}
