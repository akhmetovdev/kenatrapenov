/**
 *
 */
export type Answers = Record<string, string>;

/**
 *
 */
export interface Question {
  text: string;
  answers: Answers;
  validAnswerKey: string;
}
