describe("A suite of calculate functions", function () {


    it("sum two number", function () {
        expect(6).toEqual(sumOfTwoNumber(1, 4));
    });

    it("poor of two number", function () {
        expect(2).toEqual(calculateTwoNumberPoor(5, 3));
    });

});