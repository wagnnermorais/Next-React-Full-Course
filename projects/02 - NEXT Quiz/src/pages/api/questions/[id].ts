import database from "../db/database"

export default function handler(req, res) {
  const selectedID = +req.query.id
  const questions = database.filter(question => question.id === selectedID)

  if (questions.length === 1) {
    const selectedQuestion = questions[0]
    res.status(200).json(selectedQuestion.toObject())
    return
  }

  return res.status(204).send()
}