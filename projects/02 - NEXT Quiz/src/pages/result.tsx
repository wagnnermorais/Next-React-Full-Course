import { useRouter } from "next/router";
import { ResultProps } from "../types/ResultProps";
import { averages } from "./api/db/colors";
import styles from "../styles/Result.module.css";
import Stats from "../components/Stats";
import Button from "../components/Button";

export default function Result(props: ResultProps) {
  const router = useRouter();
  const total = +router.query.total;
  const rightAnswers = +router.query.right;
  const percent = Math.round((rightAnswers / total) * 100);

  const handleGetScoreColor = (percentage: number) => {
    if (percentage > 75) return averages[3].color;
    if (percentage > 50) return averages[2].color;
    if (percentage > 25) return averages[1].color;
    return averages[0].color;
  };
  return (
    <div className={styles.resultContainer}>
      <h1>Final result</h1>
      <div className={styles.statsBox}>
        <Stats text="Questions" value={total} />
        <Stats
          text="Right Answers"
          value={rightAnswers}
          background={handleGetScoreColor(percent)}
        />
        <Stats text="Average" value={`${percent}%`} />
      </div>
      <Button href="/" text="Try Again" />
    </div>
  );
}
