const generateImage = (req, res) => {
  res.status(200).json({
    sucess: true,
    data: {
      value: "fetched"
    }
  })
}

module.exports = { generateImage };
