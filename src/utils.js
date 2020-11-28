export const formatMoney = (n) => {
    const float = n.toLocaleString();
    return `$${String(float).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

const groupBy = (items, extractKey) => {
    return items.reduce((a, v) => {
        const k = extractKey(v);
        return {...a, [k]: (a[k] || []).concat(v)};
    }, {});
}

export const calcSubcategoryTotals = (subcategories) => {
    const aggregate_values = subcategories.reduce((a,sc)=> a.concat(sc.values), []);

    return Object.entries(groupBy(aggregate_values, (v) => v.month))
        .reduce((result, [k, v]) => result.concat({
            month: k,
            value: v.reduce((a, n) => a + Number(n.value), 0)
        }), []);
}

const scrub = (value) => {
    return value.trim().toLowerCase();
}

export const hasMatch = (a,b) => {
    return scrub(a).includes(scrub(b));
}
