const { soma, subtracao, multiplicacao, divisao } = require('../src/calculadora');

describe("Teste Calculadora", function () {
    it("Somas válidas", function () {
        expect(soma(1, 2)).toBe(3);
        expect(soma(9, 9)).toBe(18);
    });

    it("Subtrações válidas", function () {
        expect(subtracao(5, 2)).toBe(3);
    });

    it("Multiplicações válidas", function () {
        expect(multiplicacao(3, 3)).toBe(9);
    });

    it("Divisões válidas", function () {
        expect(divisao(10, 2)).toBe(5);
    });
});