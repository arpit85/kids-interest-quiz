export type Field = 'arts' | 'finance' | 'science' | 'sports';

export interface QuestionOption {
  text: string;
  emoji: string;
  field: Field;
}

export interface QuestionnaireQuestion {
  id: number;
  questionText: string;
  options: QuestionOption[];
}

export interface QuizQuestion {
  id: number;
  questionText: string;
  options: QuizOption[];
  field: Field;
}

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface Scores {
  arts: number;
  finance: number;
  science: number;
  sports: number;
}

export interface ChildInfo {
  name: string;
  age: string;
}