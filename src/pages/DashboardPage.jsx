import React from 'react';
import DashboardCard from '../components/molecules/DashboardCard/DashboardCard';
import DashboardCardGrid from '../components/organisms/DashboardCardGrid/DashboardCardGrid';
import Header from '../components/organisms/Header/Header';
import DashboardTemplate from '../components/templates/Dashboard/DashboardTemplate';

const DashboardPage = (props) => {
  const header = <Header color="blue" />;
  const grid = (
    <DashboardCardGrid>
      <DashboardCard title="My Page" color="blue" />
      <DashboardCard title="Recordings" color="red" />
      <DashboardCard title="Interviews" color="yellow" />
    </DashboardCardGrid>
  );

  return (
    <div>
      <DashboardTemplate header={header} grid={grid} />
    </div>
  );
};

export default DashboardPage;
