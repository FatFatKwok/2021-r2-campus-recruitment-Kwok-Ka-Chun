module.exports = {
index: async function (req, res) {
    var displayLimiit = 4;

    var models = await Client.find({
        limit: displayLimiit,
        sort: "grade"
    })

    return res.view('membership/index', { client: models });
},
};
