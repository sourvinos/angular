import { compute } from './compute'

describe('compute', () => {

	// Test #1
	it('Should return zero if input is negative', () => {

		// call the function
		const result = compute(-1)

		// expected result
		expect(result).toBe(0)

	})

	// Test #2
	it('Should increment the input if it is greater than or equal to zero', () => {

		// call the function 
		const result = compute(5)

		// expected result
		expect(result).toBe(6)

	})

})