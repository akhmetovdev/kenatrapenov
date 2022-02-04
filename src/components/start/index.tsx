import { h } from 'preact';
import { BackgroundVideo } from '../background-video';
import styles from './styles.module.css';

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
export function Start(props: Props) {
  return (
    <>
      <BackgroundVideo src="/peepo_clown.mp4" />

      <div class={styles.wrapper}>
        <h1 class={styles.title}>ICQ тест by Клоунада Team</h1>

        <span class={styles.description}>
          Здарова, Кенат. Мы подготовили для тебя тест, по окончанию которого ты получишь свой подарок. Внематочно
          следуй инструкциям
        </span>

        <button type="button" class={styles.button} onClick={props.onComplete}>
          PRESS ANY BUTTON TO START
        </button>
      </div>
    </>
  );
}
