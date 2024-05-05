function randomNumber(min = 1, max = 1000) {
  return parseInt(Math.random() * (max - min)) + min;
}

export default function handler(req, res) {
  res.status(200).json([
    {
      id: randomNumber(),
      name: "Pen",
      price: 2.61,
    },
    {
      id: randomNumber(),
      name: "Book",
      price: 20,
    },
    {
      id: randomNumber(),
      name: "Erasor",
      price: 1.25,
    },
    {
      id: randomNumber(),
      name: "Scissors",
      price: 8,
    },
  ]);
}
