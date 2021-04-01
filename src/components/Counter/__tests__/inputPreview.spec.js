const { render, screen } = require("@testing-library/react")
const { default: userEvent } = require("@testing-library/user-event")
const { default: Counter } = require("../../Counter")

describe("Counter", () => {
	it('displays default value: "10"', () => {
		render(<Counter />)
        const value = screen.getByTestId("value")
        
		expect(value).toHaveTextContent("10")
	})
	it('increment default value from "10" to "11"', () => {
		render(<Counter />)
        const incrementButton = screen.getByTestId("increment")
        
		userEvent.click(incrementButton)
        const value = screen.getByTestId("value")
        
		expect(value).toHaveTextContent("11")
	})
	it('decrement default value from "10" to "8"', () => {
		render(<Counter />)
        const decrementButton = screen.getByTestId("decrement")
        
		userEvent.click(decrementButton)
		userEvent.click(decrementButton)
        const value = screen.getByTestId("value")
        
		expect(value).toHaveTextContent("8")
	})
})
