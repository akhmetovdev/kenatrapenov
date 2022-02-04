import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import styles from './styles.module.css';

/**
 *
 */
interface Props {
  src: JSX.IntrinsicElements['source']['src'];
  isMuted?: JSX.IntrinsicElements['video']['muted'];
  isLooped?: JSX.IntrinsicElements['video']['loop'];
  onEnd?: () => void;
}

/**
 *
 * @param props
 * @constructor
 */
export function BackgroundVideo(props: Props) {
  const { isMuted = true, isLooped = true } = props;
  const ref = useRef<HTMLVideoElement | null>(null);

  /**
   *
   */
  useEffect(() => {
    ref.current?.play();
    ref.current?.addEventListener('pause', handlePause);
    ref.current?.addEventListener('ended', handleEnd);

    return () => {
      ref.current?.removeEventListener('pause', handlePause);
      ref.current?.removeEventListener('ended', handleEnd);
    };
  }, [ref]);

  /**
   *
   */
  function handlePause() {
    ref.current?.play();
  }

  /**
   *
   */
  function handleEnd() {
    props.onEnd?.();
  }

  return (
    <div class={styles.wrapper}>
      <video autoPlay loop={isLooped} playsInline muted={isMuted} ref={ref} class={styles.video}>
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
}
