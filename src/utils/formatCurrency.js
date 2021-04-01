export const formatCurrency = (cents, symbol = `$`) => {
	const amount = cents / 100

	return `${symbol}${amount.toFixed(2)}`
}
