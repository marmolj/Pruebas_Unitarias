const palindromo = require("../Utils/palindromo");

test("Sacar palindromo de roma", () => {
    expect(palindromo("roma")).toBe("amor");
   
})

test("Sacar palindromo de @dan", () => {
    expect(palindromo("@dan")).toBe("nad@");
   
})
