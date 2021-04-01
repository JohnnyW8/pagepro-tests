import React, { useCallback, useState } from "react"

const Counter = () => {
	const [count, setCount] = useState(10)

	const increment = useCallback(() => {
		setCount((prev) => prev + 1)
	}, [])

	const decrement = useCallback(() => {
		setCount((prev) => prev - 1)
	}, [])

	return (
		<div>
			<button data-testid="decrement" onClick={decrement}>
				decrement
			</button>
			<button data-testid="increment" onClick={increment}>
				increment
			</button>
			<div data-testid="value">{count}</div>
		</div>
	)
}

export default Counter
