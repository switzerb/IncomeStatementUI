import {calcSubcategoryTotals} from "./utils";

it('calculates the aggregation correctly', () => {
    const subcats = [
        {
            name: "Subcat Name",
            values: [
                {month: "Jan", value: "10"},
                {month: "Feb", value: "10"},]
        },
        {
            name: "Subcat Name Two",
            values: [
                {month: "Jan", value: "10"},
                {month: "Feb", value: "10"},]
        },
    ];
    const actual = calcSubcategoryTotals(subcats);
    const expected = [{month: 'Jan', value: 20}, {month: 'Feb', value: 20}];
    expect(actual).toStrictEqual(expected);
})
