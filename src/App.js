import React from 'react'

export default function App() {

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div>
            {arr.map((item) => {
                return <h1 key={item}> {item}. Hello from SSR App</h1>
            })}

            <h2>Hii</h2>

        </div>
    )
}