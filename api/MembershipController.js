module.exports = {
index: async function (req, res) {
    var displayLimiit = 10;

    var models = await Client.fetch("server/db/",{
        limit: displayLimiit,
        sort: "grade"
    })

    return res.view('membership/index', { client: models });
},
};
