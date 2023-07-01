import React from 'react'

export default function App() {

    const arr: { label: string, key: number }[] = [{ label: 'Zero', key: 0 }, { label: 'One', key: 1 }]
    return (
        <div>
            {arr.map(({ label, key }) => {
                return <h1 key={key}> {label}. Hello from SSR App</h1>
            })}

            <h2>Hii</h2>

        </div>
    )
}