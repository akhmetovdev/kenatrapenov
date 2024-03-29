import { Question } from './types';

/**
 *
 */
export const QUESTIONS: Question[] = [
  {
    text: 'человек, отрицающий существование бога - это...',
    answers: {
      1: 'аутист',
      2: 'аметист',
      3: 'атеист',
      4: 'хоккеист',
      5: 'визажист',
    },
    validAnswerKey: '1',
  },

  {
    text: 'какая фамилия у сергея?',
    answers: {
      1: 'бережной',
      2: 'сергей',
      3: 'владимирович',
      4: 'орлов',
      5: 'бережных',
      6: 'бережнов',
      7: 'брежнев',
    },
    validAnswerKey: '5',
  },

  {
    text: 'как читается английское слово, означающее "мои поздравления"?',
    answers: {
      1: 'конгратулатионсы',
      2: 'контртерростсвин',
      3: 'контрагутулейшоносы',
      4: 'кэнгратулейшонс',
      5: 'кэнтрагулейшонс',
      6: 'куттыктаймын',
    },
    validAnswerKey: '4',
  },

  {
    text: 'как тебя зовут?',
    answers: {
      1: 'ренат капенов',
      2: 'кенат рапенов',
      3: 'капен ренатов',
      4: 'компот кенатов',
      5: 'кемет приветов',
      6: 'джон сина',
    },
    validAnswerKey: '2',
  },
];
