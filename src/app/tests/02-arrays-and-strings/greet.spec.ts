import { greet } from "./greet";

describe('greet', () => {

	// Test #1
	it('Should include the name in the string', () => {
		// Arrange - Act
		const result = greet('John');
		// Assert
		expect(result).toContain('John');
	})

})