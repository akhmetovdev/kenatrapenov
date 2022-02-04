import { h } from 'preact';
import { useState } from 'preact/hooks';
import { BackgroundVideo } from '../../components/background-video';
import { Question } from './components/question';
import { QUESTIONS } from './constants';

/**
 *
 */
interface Props {
  onComplete: () => void;
}

/**
 *
 * @param props
 * @constructor
 */
export function Test(props: Props) {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const question = QUESTIONS[questionIndex];

  /**
   *
   */
  function handleSuccessAnswer() {
    const nextQuestionIndex = questionIndex + 1;

    if (nextQuestionIndex === QUESTIONS.length) {
      props.onComplete();
    } else {
      setQuestionIndex(nextQuestionIndex);
    }
  }

  /**
   *
   */
  function handleFailureAnswer() {
    alert('ПО ЧЕМУ ТЫ НЕПРАВИЛЬНО ОТВЕЧАЕШЬ? ДАВАЙ ЗАНОВО');
    setQuestionIndex(0);
  }

  return (
    <>
      <BackgroundVideo src="/peepo_clown.mp4" isMuted={false} />

      {question ? (
        <Question
          question={question}
          questionIndex={questionIndex}
          onSuccessAnswer={handleSuccessAnswer}
          onFailureAnswer={handleFailureAnswer}
        />
      ) : null}
    </>
  );
}
