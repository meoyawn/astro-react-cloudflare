import { useState, type JSX, type ReactNode } from "react"

export default function Counter({
  children,
  count: initialCount,
}: {
  children: ReactNode
  count: number
}): JSX.Element {
  const [count, setCount] = useState(initialCount)
  const add = () => setCount(i => i + 1)
  const subtract = () => setCount(i => i - 1)

  return (
    <>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="counter-message">{children}</div>
    </>
  )
}
