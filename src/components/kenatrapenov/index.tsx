import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
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
export function KenatRapenov(props: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);

  /**
   *
   */
  useEffect(() => {
    ref.current?.play();
    ref.current?.addEventListener('ended', props.onComplete);

    return () => ref.current?.removeEventListener('ended', props.onComplete);
  }, [ref, props.onComplete]);

  return (
    <video autoPlay playsInline ref={ref} class={styles.video}>
      <source src="/kenatrapenov.mp4" type="video/mp4" />
    </video>
  );
}
