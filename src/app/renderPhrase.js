export const renderPhrase = (num) => {
    const lastOne = Number(num.toString().slice(-1));
    if ([1].indexOf(lastOne) >= 0) return "год";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "года";
    if (num > 4) return "лет";
};
