import styles from './Options.module.css';

export default function Options({ onLeaveFeedback, onReset, total }) {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>

      {total > 0 && (
        <button className={styles.reset} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
