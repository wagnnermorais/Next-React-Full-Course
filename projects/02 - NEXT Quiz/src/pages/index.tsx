import { useState } from "react";
import Head from "next/head";
import Question from "../components/Question";
import Button from "../components/Button";
import QuestionModel from "../../models/question";
import AnswerModel from "../../models/answer";
import styles from "../styles/Home.module.css";

const mockQuestion = new QuestionModel(1, "Melhor cor?", [
  AnswerModel.wrongAnswer("Green"),
  AnswerModel.wrongAnswer("Red"),
  AnswerModel.wrongAnswer("Blue"),
  AnswerModel.rightAnswer("Black"),
]);

export default function Home() {
  const [question, setQuestion] = useState(mockQuestion);

  const onResponse = (index: number) => {
    setQuestion(question.selectedAnswer(index));
  };

  const timeout = () => {
    if (!question.isQuestionAnswered)
      return setQuestion(question.selectedAnswer(-1));
  };
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Question
        timeForAnswer={5}
        value={question}
        onResponse={onResponse}
        timeout={timeout}
      />
      <Button text="Next question" href="/result" />
    </div>
  );
}
