import { useState } from 'react';
import { quizQuestions } from '../data/questions';
import { Scores } from '../types';

interface QuizProps {
  onComplete: (scores: Scores) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Scores>({ arts: 0, finance: 0, science: 0, sports: 0 });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const question = quizQuestions[currentIndex];
  const total = quizQuestions.length;
  const progress = ((currentIndex) / total) * 100;

  const handleSelect = (optionIndex: number) => {
    if (showFeedback) return;

    setSelectedOption(optionIndex);
    const correct = question.options[optionIndex].isCorrect;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      const field = question.field;
      setScores(prev => ({ ...prev, [field]: prev[field] + 1 }));
    }

    setTimeout(() => {
      if (currentIndex < total - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
        setShowFeedback(false);
      } else {
        const finalScores = correct
          ? { ...scores, [question.field]: scores[question.field] + 1 }
          : scores;
        onComplete(finalScores);
      }
    }, 1200);
  };

  const getOptionClass = (index: number) => {
    if (!showFeedback) return selectedOption === index ? 'selected' : '';
    if (question.options[index].isCorrect) return 'correct';
    if (index === selectedOption && !isCorrect) return 'wrong';
    return 'dimmed';
  };

  return (
    <div className="quiz">
      <div className="progress-container">
        <div className="progress-bar quiz-progress" style={{ width: `${progress}%` }} />
        <span className="progress-text">{currentIndex + 1} of {total}</span>
      </div>

      <div className="quiz-field-badge" data-field={question.field}>
        {question.field === 'arts' && '🎨'}
        {question.field === 'finance' && '💰'}
        {question.field === 'science' && '🔬'}
        {question.field === 'sports' && '⚽'}
        <span>{question.field.charAt(0).toUpperCase() + question.field.slice(1)}</span>
      </div>

      <div className={`question-card ${showFeedback ? '' : 'slide-in'}`}>
        <h2 className="question-number">Question {currentIndex + 1}</h2>
        <p className="question-text">{question.questionText}</p>

        <div className="quiz-options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`quiz-option ${getOptionClass(index)}`}
              onClick={() => handleSelect(index)}
              disabled={showFeedback}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span className="option-text">{option.text}</span>
              {showFeedback && option.isCorrect && <span className="feedback-icon">✅</span>}
              {showFeedback && index === selectedOption && !isCorrect && <span className="feedback-icon">❌</span>}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className={`feedback-message ${isCorrect ? 'correct' : 'wrong'}`}>
            {isCorrect ? '🎉 Great job! That\'s correct!' : '😊 Not quite, but keep trying!'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;