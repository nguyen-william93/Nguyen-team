const Intern = require("../lib/intern");
const {test} = require("@jest/globals");


test("create a intern object", () => {
    const intern = new Intern("NANA", 1, "nanaistheBoss@gmail.com", "UT");

    expect(intern.name).toBe("NANA");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("testing get method", () => {
    const intern = new Intern("NANA", 1, "nanaistheBoss@gmail.com", "UT");

    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toBe(intern.id);
    expect(intern.getEmail()).toBe(intern.email);
    expect(intern.getSchool()).toBe(intern.school);
    expect(intern.getRole()).toBe("Intern");
});