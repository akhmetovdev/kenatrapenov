import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { BackgroundVideo } from '../../components/background-video';
import { WAITING_PHRASES } from './constants';
import styles from './styles.module.css';

/**
 *
 */
interface Props {}

/**
 *
 * @param props
 * @constructor
 */
export function Finish(props: Props) {
  const [secret, setSecret] = useState<string | null>(null);
  const [waitingPhraseIndex, setWaitingPhraseIndex] = useState<number>(0);

  /**
   *
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setWaitingPhraseIndex(waitingPhraseIndex => (waitingPhraseIndex + 1) % WAITING_PHRASES.length);
    }, 1000 * 5);

    return () => clearInterval(interval);
  }, []);

  /**
   *
   */
  async function fetchSecret() {
    const response = await fetch('/.netlify/functions/secret');
    const { secret } = await response.json();

    setSecret(secret);
  }

  return (
    <>
      <BackgroundVideo src="/never_gonna_give_you_up.mp4" isMuted={false} isLooped={false} onEnd={fetchSecret} />

      <div class={styles.wrapper}>
        <span class={styles.description}>
          {secret ? `секретная фраза: ${secret}` : WAITING_PHRASES[waitingPhraseIndex]}
        </span>
      </div>
    </>
  );
}
