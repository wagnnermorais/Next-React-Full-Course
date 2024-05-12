import useSortQuestions from "../../../hooks/useSortQuestions"
import database from "../db/database"

export default function handler(req, res) {
  const ids = database.map(question => question.id)
  res.status(200).json(useSortQuestions(ids))
}