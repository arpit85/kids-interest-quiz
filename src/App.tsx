import { useState } from 'react';
import Questionnaire from './components/Questionnaire';
import Quiz from './components/Quiz';
import ResultDisplay from './components/ResultDisplay';
import { Scores, ChildInfo } from './types';

type Step = 'welcome' | 'questionnaire' | 'transition' | 'quiz' | 'results';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('welcome');
  const [childInfo, setChildInfo] = useState<ChildInfo>({ name: '', age: '' });
  const [questionnaireScores, setQuestionnaireScores] = useState<Scores>({ arts: 0, finance: 0, science: 0, sports: 0 });
  const [quizScores, setQuizScores] = useState<Scores>({ arts: 0, finance: 0, science: 0, sports: 0 });

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('questionnaire');
  };

  const handleQuestionnaireComplete = (scores: Scores) => {
    setQuestionnaireScores(scores);
    setStep('transition');
  };

  const handleQuizComplete = (scores: Scores) => {
    setQuizScores(scores);
    setStep('results');
  };

  const handleRestart = () => {
    setStep('welcome');
    setChildInfo({ name: '', age: '' });
    setQuestionnaireScores({ arts: 0, finance: 0, science: 0, sports: 0 });
    setQuizScores({ arts: 0, finance: 0, science: 0, sports: 0 });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌟 KidzQuiz 🌟</h1>
        <p className="subtitle">Discover Your Child's Passion</p>
      </header>

      <main className="app-main">
        {step === 'welcome' && (
          <div className="welcome-screen">
            <div className="welcome-card">
              <div className="welcome-emojis">🎨 💰 🔬 ⚽</div>
              <h2>Welcome, Parents & Kids!</h2>
              <p>
                This fun interactive experience helps discover your child's natural
                interests across <strong>Arts</strong>, <strong>Finance</strong>,{' '}
                <strong>Science</strong>, and <strong>Sports</strong>.
              </p>
              <div className="how-it-works">
                <h3>How it works:</h3>
                <div className="steps-preview">
                  <div className="step-item">
                    <span className="step-num">1</span>
                    <span>📋 Interest Questionnaire</span>
                  </div>
                  <div className="step-item">
                    <span className="step-num">2</span>
                    <span>🧩 Knowledge Quiz</span>
                  </div>
                  <div className="step-item">
                    <span className="step-num">3</span>
                    <span>📊 Personalized Results</span>
                  </div>
                </div>
              </div>
              <form className="child-form" onSubmit={handleStart}>
                <div className="form-group">
                  <label htmlFor="childName">Child's Name</label>
                  <input
                    id="childName"
                    type="text"
                    placeholder="Enter name..."
                    value={childInfo.name}
                    onChange={e => setChildInfo({ ...childInfo, name: e.target.value })}
                    maxLength={50}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="childAge">Age</label>
                  <select
                    id="childAge"
                    value={childInfo.age}
                    onChange={e => setChildInfo({ ...childInfo, age: e.target.value })}
                  >
                    <option value="">Select age...</option>
                    {Array.from({ length: 13 }, (_, i) => i + 4).map(age => (
                      <option key={age} value={String(age)}>{age} years old</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="start-btn">
                  🚀 Let's Go!
                </button>
              </form>
            </div>
          </div>
        )}

        {step === 'questionnaire' && (
          <Questionnaire onComplete={handleQuestionnaireComplete} />
        )}

        {step === 'transition' && (
          <div className="transition-screen">
            <div className="transition-card">
              <span className="transition-emoji">🎉</span>
              <h2>Great Job!</h2>
              <p>You've completed the interest questionnaire!</p>
              <p>Now let's test your knowledge with a fun quiz across all four fields.</p>
              <button className="start-btn" onClick={() => setStep('quiz')}>
                🧩 Start the Quiz!
              </button>
            </div>
          </div>
        )}

        {step === 'quiz' && (
          <Quiz onComplete={handleQuizComplete} />
        )}

        {step === 'results' && (
          <ResultDisplay
            questionnaireScores={questionnaireScores}
            quizScores={quizScores}
            childInfo={childInfo}
            onRestart={handleRestart}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ for curious kids and supportive parents</p>
      </footer>
    </div>
  );
};

export default App;