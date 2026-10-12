import { divide } from '../src/calculator.js'

describe('divide', () => {
    it('Divides two numbers correctly', () => {
        expect(divide(2, 1)).toBe(2);
    })
    it('Throws typeError when second argument is a string', () => {
        expect(() => divide(2, "1").toThrow(TypeError))
    })
    it('Throws typeError when first argument is a string', () => {
        expect(() => divide("2", 1).toThrow(TypeError))
    })
    it('Throws TypeError when argument is NaN', () => {
        expect(() => divide(NaN, 1)).toThrow(TypeError);
    });
    it('Throws rangeError when dividing by zero', () => {
        expect(() => divide(2, 0).toThrow(RangeError))
    })
})