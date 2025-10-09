import useAppsData from '../../Hooks/useAppsData';
import { Link } from 'react-router';

import AppCard from '../../Components/AppCard/AppCard';
import AppListSkeletonLoader from '../../Components/AppListSkeletonLoader/AppListSkeletonLoader';
import HeroArea from '../../Components/HeroArea/HeroArea';

const Home = () => {
  const { appData, loading, error } = useAppsData();

  const trendingApps = appData.slice(0, 8);
  return (
    <>
      {/* Hero Area  */}
      <HeroArea />

      {/* Trending Apps  */}
      <section className="my-20 max-w-7xl mx-auto">
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold text-[#001931]">Trending Apps</h1>
          <p className="text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {loading ? (
          <AppListSkeletonLoader count="8" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8 ">
            {trendingApps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        )}

        <div className="flex justify-center">
          <Link
            to={'/apps'}
            className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold"
          >
            Show All
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
