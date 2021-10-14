import { useState } from 'react';

export function Counter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <div>The count is {count}</div>
            <br />
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <br />
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    )
}