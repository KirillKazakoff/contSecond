import ErrorRepository from '../js/app';

const errMap = new ErrorRepository();

test('translate check (there is such a code in errMap)', () => {
    const expected = 'something about error 100';

    expect(errMap.translate(100)).toBe(expected);
});

test('translate check (there is no such a code in errMap)', () => {
    const expected = 'Unknown error';

    expect(errMap.translate(107)).toBe(expected);
});
