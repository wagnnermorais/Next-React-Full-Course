export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({
      nome: "Wagner",
    });
  } else {
    res.status(200).json({
      nome: "Pedro",
    });
  }
};
