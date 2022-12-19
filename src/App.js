import styles from './App.module.css';
import Randomizer from "./features/Randomizer";

function App() {
  return (
    <div className={styles['app']}>
      <div className={styles['header']}>
      </div>
      <div className={styles['content']}>
        <Randomizer />
      </div>
      <div className={styles['footer']}>
      </div>
    </div>
  );
}

export default App;
