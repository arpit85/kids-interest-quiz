import { useState } from 'react';
import { questionnaireQuestions } from '../data/questions';
import { Scores } from '../types';

interface QuestionnaireProps {
  onComplete: (scores: Scores) => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Scores>({ arts: 0, finance: 0, science: 0, sports: 0 });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const question = questionnaireQuestions[currentIndex];
  const total = questionnaireQuestions.length;
  const progress = ((currentIndex) / total) * 100;

  const handleSelect = (optionIndex: number) => {
    if (animating) return;
    setSelectedOption(optionIndex);

    const field = question.options[optionIndex].field;
    const newScores = { ...scores, [field]: scores[field] + 1 };
    setScores(newScores);

    setAnimating(true);
    setTimeout(() => {
      if (currentIndex < total - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
      } else {
        onComplete(newScores);
      }
      setAnimating(false);
    }, 600);
  };

  return (
    <div className="questionnaire">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        <span className="progress-text">{currentIndex + 1} of {total}</span>
      </div>

      <div className={`question-card ${animating ? 'slide-out' : 'slide-in'}`}>
        <h2 className="question-number">Question {currentIndex + 1}</h2>
        <p className="question-text">{question.questionText}</p>

        <div className="options-grid">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-card ${selectedOption === index ? 'selected' : ''}`}
              onClick={() => handleSelect(index)}
              disabled={animating}
            >
              <span className="option-emoji">{option.emoji}</span>
              <span className="option-text">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;