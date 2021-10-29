const Employee =  require("../lib/Employee");
const {test} = require("@jest/globals");


test("create an Employee object", () => {
    const employee = new Employee ("NANA", 0, "nanaiscute@gmail.com");

    expect(employee.name).toBe("NANA");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test("testing all the get method", () => {
    const employee = new Employee ("NANA", 0, "nanaiscute@gmail.com");

    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
    expect(employee.getRole()).toBe("Employee");
});