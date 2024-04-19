const users = [];

export default function FormAPI(req, res) {
  if (req.method === "POST") {
    post(req, res);
  }
  res.status(200).json(users);
}

function post(req, res) {
  const user = JSON.parse(req.body);
  users.push(user);
  res.status(200).send();
}
