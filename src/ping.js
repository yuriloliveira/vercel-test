module.exports = async (req, res) => {
  try {
    res.json({ req, status: "OK" });
  } catch (error) {
    res.json({ req, status: "ERROR", error });
  }
};
