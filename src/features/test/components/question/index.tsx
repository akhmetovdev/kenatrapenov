import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Question as QuestionData } from '../../types';
import styles from './styles.module.css';

/**
 *
 */
interface Props {
  question: QuestionData;
  questionIndex: number;
  onSuccessAnswer: () => void;
  onFailureAnswer: () => void;
}

/**
 *
 * @param props
 * @constructor
 */
export function Question(props: Props) {
  const [selectedAnswerKey, setSelectedAnswerKey] = useState<string | null>(null);

  /**
   *
   * @param e
   */
  function handleSubmit(e: h.JSX.TargetedEvent<HTMLFormElement, Event>) {
    e.preventDefault();
    setSelectedAnswerKey(null);

    if (selectedAnswerKey === props.question.validAnswerKey) {
      props.onSuccessAnswer();
    } else {
      props.onFailureAnswer();
    }
  }

  return (
    <form onSubmit={handleSubmit} class={styles.form}>
      <fieldset class={styles.fieldset}>
        <legend class={styles.legend}>{props.question.text}</legend>

        {Object.entries(props.question.answers).map(([key, value]) => (
          <label key={key} class={styles.label}>
            <input
              type="checkbox"
              name={props.questionIndex.toString()}
              value={key}
              checked={key === selectedAnswerKey}
              onClick={() => setSelectedAnswerKey(key)}
            />
            {value}
          </label>
        ))}

        <button type="submit" disabled={selectedAnswerKey == null}>
          NEXT
        </button>
      </fieldset>
    </form>
  );
}
