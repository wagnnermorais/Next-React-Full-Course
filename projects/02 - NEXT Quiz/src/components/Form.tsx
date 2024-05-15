import { FormProps } from "../types/FormProps";
import Question from "./Question";
import Button from "./Button";
import styles from "../styles/Form.module.css";

export default function Form(props: FormProps) {
  const onResponse = (index: number) => {
    if (!props.question.isQuestionAnswered)
      return props.answeredQuestion(props.question.selectedAnswer(index));
  };

  return (
    <div className={styles.formContainer}>
      {props.question ? (
        <Question
          value={props.question}
          timeForAnswer={6}
          onResponse={onResponse}
          timeout={props.nextStep}
        />
      ) : (
        <p>Loading...</p>
      )}
      <Button
        text={props.isLastQuestion ? "Finish" : "Next question"}
        onClick={props.nextStep}
      />
    </div>
  );
}
