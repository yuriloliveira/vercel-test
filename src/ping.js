module.exports = async (req, res) => {
  try {
    res.send("OK");
  } catch (error) {
    res.status(500).end();
  }
};
