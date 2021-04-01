const { render, screen } = require("@testing-library/react")
const { default: InputPreview } = require("..")

describe('inputPreview', () => {
    it('displays label value: "name"', () => {
        render(<InputPreview label="name" />);
        const itemValue = screen.getByText(/name/i)
        expect(itemValue).toBeInTheDocument()
    })
})