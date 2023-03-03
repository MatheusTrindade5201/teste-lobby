import { createObject } from "./createObject";

test('', () => {
    expect(createObject()).toEqual({first: 1, second: 2})
})