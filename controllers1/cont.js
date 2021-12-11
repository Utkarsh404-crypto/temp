const name = async(req, res) => {
    try {
        return res.send("utk")
    } catch (err) {
        res.send("err")
    }
}

module.exports = name