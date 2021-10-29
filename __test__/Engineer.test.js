const Engineer = require("../lib/Engineer");
const {test} = require("@jest/globals");


test("create a engineer object", () => {
    const engineer = new Engineer("NANA", 1, "nanaistheBoss@gmail.com", "nguyen-william93");

    expect(engineer.name).toBe("NANA");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("testing get method", () => {
    const engineer = new Engineer("NANA", 1, "nanaistheBoss@gmail.com", "nguyen-william93");

    expect(engineer.getName()).toBe(engineer.name)
    expect(engineer.getId()).toBe(engineer.id);
    expect(engineer.getEmail()).toBe(engineer.email);
    expect(engineer.getGitHub()).toBe(engineer.github);
    expect(engineer.getRole()).toBe("Engineer");
});