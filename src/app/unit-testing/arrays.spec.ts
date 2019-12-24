import { getCurrencies } from "./arrays"

describe('getCurrencies', () => {
    it('Should return an array of currencies', () => {
        expect(getCurrencies()).toContain('USD')
        expect(getCurrencies()).toContain('AUD')
    })
})