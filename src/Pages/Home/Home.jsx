import React from 'react';
import useAppsData from '../../Hooks/useAppsData';
import TrendingApps from '../../Components/trendingApps/TrendingApps';
import { Link } from 'react-router';
import googlePlay from '../../assets/googlePlay.png';
import appPlay from '../../assets/appStore.png';
import heroPng from '../../assets/hero.png';

const Home = () => {
  const { appData, loading, error } = useAppsData();

  const trendingApps = appData.slice(0, 8);
  return (
    <div className="">
      <div className="text-center mt-10 max-w-7xl mx-auto">
        <h1 className="text-7xl font-semibold">
          We Build <br />
          <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{' '}
          Apps{' '}
        </h1>
        <p className="text-[#627382] md:px-60 mt-4">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center gap-3 mt-8">
          <Link
            to={'https://play.google.com/store'}
            target="_blank"
            className="btn"
          >
            <img src={googlePlay} alt="" className="w-[25px]" /> Google Play
          </Link>
          <Link
            to={'https://www.apple.com/app-store/'}
            target="_blank"
            className="btn"
          >
            <img src={appPlay} alt="" className="w-[25px]" /> App Store
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <img src={heroPng} alt="" className="mx-auto" />
        <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-14 space-y-10 text-white text-center">
          <h2 className="text-5xl font-semibold">
            Trusted by Millions, Built for You
          </h2>
          <div className="md:flex justify-center gap-50 space-y-12">
            <div>
              <p className="text-sm mb-2">Total Downloads</p>
              <span className="text-6xl font-bold">29.6M</span>
              <p className="text-sm mt-3">21% more than last month</p>
            </div>
            <div>
              <p className="text-sm mb-2">Total Reviews</p>
              <span className="text-6xl font-bold">906K</span>
              <p className="text-sm mt-3">46% more than last month</p>
            </div>
            <div>
              <p className="text-sm mb-2">31 more will Launch</p>
              <span className="text-6xl font-bold">132+</span>
              <p className="text-sm mt-3">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Apps  */}
      <section className="my-20 max-w-7xl mx-auto">
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold text-[#001931]">Trending Apps</h1>
          <p className="text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8 ">
          {trendingApps.map((app) => (
            <TrendingApps key={app.id} app={app}></TrendingApps>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to={'/apps'}
            className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold"
          >
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
