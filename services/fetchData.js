const { default: axios } = require("axios");
const { getCache, stats, createCache } = require("./cache");

const fetchdata = async (req, res, next) => {
    const { username } = req.params;
    const cacheData = getCache(username)
    if (cacheData) {
        res.status(200).json({
            data: cacheData,
            stats
        })
    } else {
        const url = `https://api.github.com/users/${username}`;
        const data = await axios.get(url)
        console.log(url)
        createCache(username, data.data)
        res.status(200).json({
            data: data.data,
        });
    }
}

module.exports = fetchdata