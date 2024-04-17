const isUpperCase= require("../Utils/esmayusculas");

test("Verificar que es mayusculas", () => {
    expect(isUpperCase("MADRID")).toBe(true);
})
test("Verificar que NO es mayusculas", () => {
    expect(isUpperCase("madrid")).toBe(false);
})