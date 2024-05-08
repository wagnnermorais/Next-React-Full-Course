import database from "../db/database"

export default function handler(req, res) {
  res.status(200).json(database.map((question) => (
    question.id
  )))
}