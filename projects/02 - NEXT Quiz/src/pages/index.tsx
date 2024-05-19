import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Question from "../components/Question";
import Button from "../components/Button";
import Form from "../components/Form";
import QuestionModel from "../../models/question";
import styles from "../styles/Home.module.css";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const router = useRouter();
  const [question, setQuestion] = useState<QuestionModel>();
  const [questionIds, setQuestionIds] = useState<number[]>([]);
  const [rightAnswers, setRightAnswers] = useState<number>(0);

  async function useLoadQuestionIds() {
    const response = await fetch(`${BASE_URL}/quiz`);
    const questionIds = await response.json();
    setQuestionIds(questionIds);
  }

  async function useLoadQuestion(questionId: number) {
    const response = await fetch(`${BASE_URL}/questions/${questionId}`);
    const question = await response.json();
    const newQuestion = QuestionModel.createUsingObject(question);
    setQuestion(newQuestion);
  }

  useEffect(() => {
    useLoadQuestionIds();
  }, []);

  useEffect(() => {
    questionIds.length > 0 && useLoadQuestion(questionIds[0]);
  }, []);

  const onResponse = (index: number) => {
    setQuestion(question.selectedAnswer(index));
  };

  const timeout = () => {
    if (question.isQuestionAnswered)
      return setQuestion(question.selectedAnswer(-1));
  };

  const answeredQuestion = (answeredQuestion: QuestionModel) => {
    const isRightAnswer = answeredQuestion.isRight;
    setQuestion(answeredQuestion);
    setRightAnswers(rightAnswers + (isRightAnswer ? 1 : 0));
  };

  const nextQuestionId = () => {
    const nextIndex = questionIds.indexOf(question.id) + 1;
    return questionIds[nextIndex];
  };

  const nextStep = () => {
    const nextId = nextQuestionId();
    nextId ? goToNextQuestion(nextId) : finishQuiz();
  };

  const goToNextQuestion = (nextId: number) => {
    useLoadQuestion(nextId);
  };

  const finishQuiz = () => {
    router.push({
      pathname: "/result",
      query: {
        total: questionIds.length,
        right: rightAnswers,
      },
    });
  };

  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {question ? (
        <Form
          question={question}
          isLastQuestion={nextQuestionId() === undefined}
          answeredQuestion={answeredQuestion}
          nextStep={nextStep}
        />
      ) : (
        false
      )}
    </div>
  );
}
