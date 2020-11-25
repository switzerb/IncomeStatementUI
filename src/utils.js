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

const scrub = (value) => {
    return value.trim().toLowerCase();
}

export const hasMatch = (a,b) => {
    return scrub(a).includes(scrub(b));
}

const isMonthInQuarter = (month, quarter) => {
    switch(quarter) {
        case "Q1" :
            return ["Jan", "Feb", "Mar"].some( m => month.includes(m));
        case "Q2":
            return ["Apr", "May", "Jun"].some( m => month.includes(m));
        case "Q3":
            return ["Jul", "Aug", "Sept"].some( m => month.includes(m));
        case "Q4":
            return ["Oct", "Nov", "Dec"].some( m => month.includes(m));
        default:
            return false;
    }
}
