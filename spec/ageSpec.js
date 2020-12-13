describe("My whatCanIDrink function", function () {
    beforeEach(function () {
        drink = new whatCanIDrink();
    });

    describe("Age check", function () {
        it("should exist", function () {
            expect(whatCanIDrink).toBeDefined();
        });

        it("should return drink toddy", function () {
            var result = whatCanIDrink(13);
            expect(result).toBe("Drink Toddy");
        });

        it("should return drink coke", function () {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });

        it("should return drink beer", function () {
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });

        it("should return drink beer", function () {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });

        it("should return drink whisky", function () {
            var result = whatCanIDrink(30)
            expect(result).toBe("Drink Whisky");
        });

        it("should be unable to return a drink when called as whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});