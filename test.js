const {sum} = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One Euro should be 1.07 Dollars", function () {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})
test("One Dollar should be 146.262 Japanese Yen", function () {
    const { fromDollarToYen } = require('./app.js');
    const Yen = fromDollarToYen(3.5);
    const expected = 3.5 * 146.262;
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724);
});
test("One Pound should be 179.885 Japanese Yen", function () {
    const {fromYenToPound} = require('./app.js');
    const Pound = fromYenToPound(3.5);
    const expected = 3.5 * 179.885;
    expect(fromYenToPound(3.5)).toBe(629.5977011494252);
});