import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {

	// Test #1
	it('Should return three array elements', () => {
		// Arrange - Act
		const result: any[] = getCurrencies();
		// Assert
		expect(result).toContain('USD');
		expect(result).toContain('AUD');
		expect(result).toContain('EUR');
	})
})