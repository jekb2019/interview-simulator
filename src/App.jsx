import styles from './App.module.css';
import DashboardCard from './components/molecules/DashboardCard/DashboardCard';
import DashboardCardGrid from './components/organisms/DashboardCardGrid/DashboardCardGrid';

function App() {
  return (
    <div className={styles.app}>
      <DashboardCardGrid>
        <DashboardCard title="My Page" color="blue" />
        <DashboardCard title="Recordings" color="red" />
        <DashboardCard title="Interviews" color="yellow" />
      </DashboardCardGrid>
    </div>
  );
}

export default App;
