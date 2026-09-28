import { useState } from 'react';
import Counter from './Counter';
import TextInput from './TextInput';

export default function App() {
    const [text, setText] = useState('');

    return (
        <main className="page">
            <h1>Лічильник і текст</h1>
            <Counter />
            <TextInput value={text} onTextChange={setText} />
            <p className="chars">Number of characters: {text.length}</p>
        </main>
    );
}
