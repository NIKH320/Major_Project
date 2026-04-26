exports.getPrediction = async (crop, type) => {
    // Fake data (mock)
    const mockData = {
        wheat: {
            current: 2200,
            next_week: 2250,
            next_month: 2400,
            history: [2000, 2100, 2150, 2200]
        },
        rice: {
            current: 1800,
            next_week: 1850,
            next_month: 2000,
            history: [1700, 1750, 1780, 1800]
        }
    };

    if (!mockData[crop] || !mockData[crop][type]) {
        throw new Error("Invalid crop or type");
    }

    return {
        price: mockData[crop][type],
        history: mockData[crop].history
    };
};