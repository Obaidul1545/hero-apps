import React from 'react';
import useAppsData from '../../Hooks/useAppsData';

const Home = () => {
  const { appData, loading, error } = useAppsData();
  console.log(appData);
  return <div>Home</div>;
};

export default Home;
