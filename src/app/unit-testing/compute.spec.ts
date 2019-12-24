import { compute } from "./compute"

describe('compute', () => {
    it('Should return zero if input is negative', () => {
        const result = compute(-1)
        expect(result).toBe(0)
    })
    it('Should return input + 1 if the input is positive', () => {
        const result = compute(2)
        expect(result).toBe(3)
    })
})