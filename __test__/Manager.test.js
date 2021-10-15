const Manager = require("../lib/Manager");
const {test} = require("@jest/globals");


test("create a manager object", () => {
    const manager = new Manager("NANA", 1, "nanaistheBoss@gmail.com", 1018);

    expect(manager.name).toBe("NANA");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("testing get method", () => {
    const manager = new Manager("NANA", 1, "nanaistheBoss@gmail.com", 1018);

    expect(manager.getName()).toBe(manager.name)
    expect(manager.getId()).toBe(manager.id);
    expect(manager.getEmail()).toBe(manager.email);
    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
    expect(manager.getRole()).toBe("Manager");
});