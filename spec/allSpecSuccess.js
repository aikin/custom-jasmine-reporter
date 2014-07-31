describe("A suite of basic functions", function () {
    var name;

    it("sayHello", function () {
        name = "Conan";
        var exp = "Hello Conan";
        expect(exp).toEqual(sayHello(name));
    });

    it("reverse word", function () {
        expect('DCBA').toEqual(reverse('ABCD'));
        expect('nona').toEqual(reverse('anon'));
    });

    it("upper case word", function () {
        expect('NIHAO').toEqual(upperCase('nihao'));
        expect('JASMINE').toEqual(upperCase('jasmine'));
    })
});
