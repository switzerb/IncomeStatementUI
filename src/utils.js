export const formatMoney = (n) => {
    const float = n.toLocaleString();
    return `$${String(float).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export const calcSubcategoryTotals = (subcategories) => {
    let result = [];
    const aggregated = subcategories.reduce((a,sc)=> {
        // eslint-disable-next-line
        sc.values.map(v => {
            if(!a[v.month]) {
                a[v.month]  = [Number(v.value)];
            } else {
                a[v.month].push(Number(v.value));
            }
        });
        return a;
    },{});
    // eslint-disable-next-line
    Object.entries(aggregated).map(([k,v]) => {
        result.push({ month: k, value: v.reduce((a,n) => a + n, 0)});
    });
    return result;
}
