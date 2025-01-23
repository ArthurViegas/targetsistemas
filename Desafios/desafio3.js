const revenueJson = `{
    "revenue": [
      {"day": 1, "amount": 1000},
      {"day": 2, "amount": 0},
      {"day": 3, "amount": 1700},
      {"day": 4, "amount": 2000},
      {"day": 5, "amount": 0},
      {"day": 6, "amount": 2500},
      {"day": 7, "amount": 1200},
      {"day": 8, "amount": 800},
      {"day": 9, "amount": 0},
      {"day": 10, "amount": 2200}
    ]
  }`;

function calculateRevenue(revenueJson) {
    const data = JSON.parse(revenueJson);
    const revenue = data.revenue;

    // Initialize variables
    let minValue = Infinity;
    let maxValue = -Infinity;
    let totalRevenue = 0;
    let daysWithRevenue = 0;
    let daysWithoutRevenue = 0;
    let daysAboveAverage = 0;

    // Iterate through the revenue data
    revenue.forEach(({ amount }) => {
        if (amount > 0) {
            // Menor valor
            if (amount < minValue) {
                minValue = amount;
            }

            // Maior valor
            if (amount > maxValue) {
                maxValue = amount;
            }

            totalRevenue += amount;
            daysWithRevenue++;
        } else {
            daysWithoutRevenue++;
        }
    });

    const averageRevenue = totalRevenue / daysWithRevenue;

    // Count de dias com faturamento acima da media
    revenue.forEach(({ amount }) => {
        if (amount > averageRevenue) {
            daysAboveAverage++;
        }
    });

    const result = {
        daysWithRevenue,
        daysWithoutRevenue,
        minValue,
        maxValue,
        daysAboveAverage,
        average: Number(averageRevenue.toFixed(3))
    }

    return result;
}

console.table(calculateRevenue(revenueJson));

