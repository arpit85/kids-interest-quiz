import { Scores, ChildInfo, Field } from '../types';
import { fieldInfo } from '../data/questions';

interface ResultDisplayProps {
  questionnaireScores: Scores;
  quizScores: Scores;
  childInfo: ChildInfo;
  onRestart: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ questionnaireScores, quizScores, childInfo, onRestart }) => {
  // Combine scores: questionnaire measures preference, quiz measures aptitude
  const combined: Scores = {
    arts: questionnaireScores.arts * 2 + quizScores.arts * 3,
    finance: questionnaireScores.finance * 2 + quizScores.finance * 3,
    science: questionnaireScores.science * 2 + quizScores.science * 3,
    sports: questionnaireScores.sports * 2 + quizScores.sports * 3,
  };

  const totalCombined = combined.arts + combined.finance + combined.science + combined.sports;
  const fields: Field[] = ['arts', 'finance', 'science', 'sports'];

  // Sort by score descending
  const ranked = fields
    .map(f => ({ field: f, score: combined[f], percentage: totalCombined > 0 ? (combined[f] / totalCombined) * 100 : 0 }))
    .sort((a, b) => b.score - a.score);

  const topField = ranked[0];
  const info = fieldInfo[topField.field];

  return (
    <div className="result-display">
      <div className="result-header">
        <h2>
          {childInfo.name ? `${childInfo.name}'s` : "Your Child's"} Interest Profile
        </h2>
        {childInfo.age && <p className="age-badge">Age: {childInfo.age}</p>}
      </div>

      <div className="top-result" style={{ borderColor: info.color }}>
        <span className="top-emoji">{info.emoji}</span>
        <h3 style={{ color: info.color }}>{info.name}</h3>
        <p className="top-percentage">{topField.percentage.toFixed(0)}% match</p>
        <p className="top-description">{info.description}</p>
      </div>

      <h3 className="breakdown-title">Full Breakdown</h3>
      <div className="score-bars">
        {ranked.map(({ field, percentage }) => {
          const fi = fieldInfo[field];
          return (
            <div key={field} className="score-row">
              <div className="score-label">
                <span>{fi.emoji} {fi.name}</span>
                <span className="score-pct">{percentage.toFixed(0)}%</span>
              </div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{ width: `${percentage}%`, backgroundColor: fi.color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="result-sections">
        <div className="result-section">
          <h4>📋 Questionnaire (Interest)</h4>
          <div className="mini-scores">
            {fields.map(f => (
              <span key={f} className="mini-badge" style={{ backgroundColor: fieldInfo[f].color }}>
                {fieldInfo[f].emoji} {questionnaireScores[f]}
              </span>
            ))}
          </div>
        </div>
        <div className="result-section">
          <h4>🧩 Quiz (Knowledge)</h4>
          <div className="mini-scores">
            {fields.map(f => (
              <span key={f} className="mini-badge" style={{ backgroundColor: fieldInfo[f].color }}>
                {fieldInfo[f].emoji} {quizScores[f]}/3
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="result-tip">
        <h4>💡 Tip for Parents</h4>
        <p>
          Use these results as a conversation starter with your child. Ask them about what
          they enjoyed most during the quiz. Remember, interests can change over time —
          the goal is to nurture curiosity and support their journey!
        </p>
      </div>

      <button className="restart-btn" onClick={onRestart}>
        🔄 Take the Quiz Again
      </button>
    </div>
  );
};

export default ResultDisplay;