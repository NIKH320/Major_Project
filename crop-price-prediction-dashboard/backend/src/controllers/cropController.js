const { getPrediction } = require("../services/mlService");

exports.getCropData = async (req, res) => {
    const { crop, type } = req.query;

    try {
        const prediction = await getPrediction(crop, type);

        res.json({
            crop,
            type,
            predictedPrice: prediction.price,
            history: prediction.history
        });

    } catch (error) {
        res.status(500).json({ msg: "Error fetching data" });
    }
};