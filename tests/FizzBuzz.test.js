import { FizzBuzz, FizzBuzzDos } from "../src/scripts/FizzBuzz";

describe('FizzBuzz', () => {
    test('should return Buzz if divisible by five', () => {
        //Given
        let numb = 5;
        //When
        const result = FizzBuzz(numb);
        //Then
        expect(result).toBe("Buzz");
    })
});

describe('FizzBuzz', () => {
    test('should return FizzBuzz if divisible by five and three', () => {
        //Given
        let numb = 15;
        //When
        const result = FizzBuzzDos(numb);
        //Then
        expect(result).toBe("FizzBuzz");
    
    })
});.
