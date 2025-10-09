import React, { useEffect, useState } from 'react';
import useAppsData from '../../Hooks/useAppsData';
import { getStoredApp } from '../../utility/addToDB';
import AppNotFound from '../../Components/AppNotFound/AppNotFound';
import PageNotFound from '../PageNotFound/PageNotFound';

const Installation = () => {
  const [installedApp, setInstalledApp] = useState([]);
  const { appData } = useAppsData();
  // console.log(appData);

  useEffect(() => {
    const storedAppData = getStoredApp();
    console.log(storedAppData);
    const convertStoredApp = storedAppData.map((id) => parseInt(id));
    console.log(convertStoredApp);
    const myInstalledApps = appData.filter((app) =>
      convertStoredApp.includes(app.id)
    );
    console.log(myInstalledApps);

    setInstalledApp(myInstalledApps);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center space-y-2 my-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center my-2">
        <h3>({installedApp.length}) Apps Found</h3>
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Size
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Low-High</a>
              </li>
              <li>
                <a>High-Low</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <PageNotFound></PageNotFound>
    </div>
  );
};

export default Installation;
