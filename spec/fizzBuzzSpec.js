describe("My FizzBuzz function", function () {
    beforeEach(function () {
        num = new fizzBuzz();
    });

    describe("FizzBuzz check", function () {
        it("should exist", function () {
            expect(fizzBuzz).toBeDefined();
        });

        it("Should return Fizz", function () {
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });

        it("Should return Buzz", function () {
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        });

        it("Should return FizzBuzz", function () {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });

        it("Should return 2", function () {
            var result = fizzBuzz(2)
            expect(result).toBe(2);
        });
    });
});