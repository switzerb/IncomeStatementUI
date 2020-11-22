export const formatMoney = (n) => {
    const float = n.toLocaleString();
    return `$${String(float).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
