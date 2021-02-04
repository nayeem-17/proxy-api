const { default: axios } = require("axios");

const fetchdata = async (req, res, next) => {
    const { username } = req.params;
    const url = `https://api.github.com/users/${username}`;
    const data = await axios.get(url)
    console.log(url)
    console.log(data)
    res.status(200).json({
        data: data.data
    });
}

module.exports = fetchdata