import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Finish } from './features/finish';
import { KenatRapenov } from './components/kenatrapenov';
import { Start } from './components/start';
import { Test } from './features/test';

/**
 *
 */
enum Step {
  Start,
  Test,
  KenatRapenov,
  Finish,
}

/**
 *
 * @constructor
 */
export function App() {
  const [step, setStep] = useState<Step>(Step.Start);

  return (
    <>
      {step === Step.Start ? (
        <Start onComplete={() => setStep(Step.Test)} />
      ) : step === Step.Test ? (
        <Test onComplete={() => setStep(Step.KenatRapenov)} />
      ) : step === Step.KenatRapenov ? (
        <KenatRapenov onComplete={() => setStep(Step.Finish)} />
      ) : (
        <Finish />
      )}
    </>
  );
}
