function totalRevenue(revenue) {
    const percentages = {};

    const totalRevenue = Object.values(revenue).reduce((acc, value) => acc + value, 0);

    for (const state in revenue) {
        percentages[state] = ((revenue[state] / totalRevenue) * 100).toFixed(2);
    }

    for (const state in percentages) {
        console.log(`${state}: ${percentages[state]}%`);
    }

}

const revenue = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Others: 19849.53
};

totalRevenue(revenue)