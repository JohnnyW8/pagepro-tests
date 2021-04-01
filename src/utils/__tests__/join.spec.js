const { join } = require("../join")

describe("join", () => {
	it("returns 1, 2 for input [1, 2]", () => {
		expect(join([1, 2])).toBe("1, 2")
	})

	it("returns 10. 23. 40 for input [10, 23, 40] + `. `", () => {
		expect(join([10, 23, 40], `. `)).toBe("10. 23. 40")
	})

	it("returns empty string for input empty array", () => {
		expect(join([])).toBe("")
	})
})
