import styles from './Description.module.css';

export default function Description({ text }) {
  return <p className={styles.desc}>{text}</p>;
}
