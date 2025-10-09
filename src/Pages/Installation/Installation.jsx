import { useEffect, useState } from 'react';
import useAppsData from '../../Hooks/useAppsData';
import { getStoredApp, removeToStoredDB } from '../../utility/addToDB';
import InstallAppCard from '../../Components/InstallAppCard/InstallAppCard';
import { toast } from 'react-toastify';
import { PuffLoader } from 'react-spinners';
import NotInstall from '../../Components/NotInstall/NotInstall';

const Installation = () => {
  const { appData, loading } = useAppsData();
  const [installedApp, setInstalledApp] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    const storedAppData = getStoredApp();
    const convertStoredApp = storedAppData.map((id) => parseInt(id));
    const myInstalledApps = appData.filter((app) =>
      convertStoredApp.includes(app.id)
    );
    setInstalledApp(myInstalledApps);
  }, [appData]);

  // sorted by size functionality
  const handleSort = (type) => {
    setSort(type);
    if (type === 'low-high') {
      const sortedByLowHigh = [...installedApp].sort((a, b) => a.size - b.size);
      setInstalledApp(sortedByLowHigh);
    }
    if (type === 'high-low') {
      const sortedByHighLow = [...installedApp].sort((a, b) => b.size - a.size);
      setInstalledApp(sortedByHighLow);
    }
  };

  // Uninstall functionality
  const handleUninstall = (id) => {
    removeToStoredDB(id);
    setInstalledApp((prev) => prev.filter((p) => p.id !== id));
    toast.success('App Uninstalled Success!');
  };

  return (
    <>
      {loading ? (
        <PuffLoader
          color="#2645b3"
          size={201}
          className="mx-auto mt-10 mb-30"
        />
      ) : (
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 my-10 max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-[#001931]">
              Your Installed Apps
            </h1>
            <p className="text-[#627382]">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          <section className="mb-20">
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
                      <a onClick={() => handleSort('low-high')}>Low-High</a>
                    </li>
                    <li>
                      <a onClick={() => handleSort('high-low')}>High-Low</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* installed card  */}
            {installedApp.length === 0 ? (
              <NotInstall />
            ) : (
              <div className="space-y-5">
                {installedApp.map((appsData) => (
                  <InstallAppCard
                    key={appsData.id}
                    appsData={appsData}
                    handleUninstall={handleUninstall}
                  ></InstallAppCard>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default Installation;
