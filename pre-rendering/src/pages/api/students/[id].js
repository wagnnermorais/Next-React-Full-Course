export default function handler(req, res) {
  const id = +req.query.id;
  res.status(200).json({
    id: id,
    name: "Wagner Luiz Marques de Morais",
    age: 24,
    registry: 190912,
    email: "wagnermail@gmail.com",
    phone: 5551912345678,
  });
}
