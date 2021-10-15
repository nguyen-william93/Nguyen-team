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

    expect(engineer.getName()).toBe("NANA")
    expect(engineer.getId()).toBe(1);
    expect(engineer.getEmail()).toBe("nanaistheBoss@gmail.com");
    expect(engineer.getGitHub()).toBe("nguyen-william93");
    expect(engineer.getRole()).toBe("Engineer");
});