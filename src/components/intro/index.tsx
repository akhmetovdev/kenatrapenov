import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import styles from './styles.module.css';

/**
 *
 * @constructor
 */
export function Intro() {
  const ref = useRef<HTMLVideoElement | null>(null);

  /**
   *
   */
  useEffect(() => {
    if (ref.current) {
      ref.current.play();
    }
  }, [ref]);

  return (
    <video autoPlay loop playsInline muted ref={ref} class={styles.video}>
      <source src="/kenatrapenov.mp4" type="video/mp4" />
    </video>
  );
}
