import styles from './App.module.css';
import Navbar from './components/Navbar';
import AppRoutes from "./routes";

function App() {
  return (
    <div className={styles['app']}>
      <div className={styles['header']}>
        <Navbar />
      </div>
      <div className={styles['content']}>
        <AppRoutes />
      </div>
      <div className={styles['footer']}>
      </div>
    </div>
  );
}

export default App;
