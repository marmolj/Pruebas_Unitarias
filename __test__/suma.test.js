const sum = require("../Utils/suma");

test("sumar 1 + 2", () => {
    expect(sum(1,2)).toBe(3);
})

test("sumar negativos", () => {
    expect(sum(-1,-2)).toBe(-3)
})