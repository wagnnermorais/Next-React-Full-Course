export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Pen",
      price: 2.61,
    },
    {
      id: 2,
      name: "Book",
      price: 20,
    },
    {
      id: 3,
      name: "Erasor",
      price: 1.25,
    },
    {
      id: 4,
      name: "Scissors",
      price: 8,
    },
  ]);
}
