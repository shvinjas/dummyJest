const index = require("./index.js")


test("adding 1 + 2 will giv 3",()=>{
    expect(index.sum(1,2)).toBe(3);
});

test("diff between a-b will be -1",()=>{
    expect(index.diff(1,2)).toBe(-1);
})

