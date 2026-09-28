import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(previous => previous + 1);
    }

    function decrease() {
        setCount(previous => previous - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="card">
            <h2>Counter</h2>
            <p className="count">{count}</p>
            {count < 0 && <p role="status" className="error">Counter can't be negative</p>}

            <div className="buttons">
                <button type="button" onClick={increase}>Increase</button>
                <button type="button" onClick={decrease}>Decrease</button>
                <button type="button" className="secondary" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
