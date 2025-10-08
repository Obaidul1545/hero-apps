import AppCard from '../../Components/AppCard/AppCard';
import useAppsData from '../../Hooks/useAppsData';

const Apps = () => {
  const { appData } = useAppsData();

  return (
    <div>
      <div className="text-center space-y-2 my-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-[#001931]">
          Our All Applications
        </h1>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <section className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center my-2">
          <h3>(25) Apps Found</h3>
          <div>
            <label className="input">
              <svg
                className="h-[1.5em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow outline-none"
                placeholder="Search Apps"
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4">
          {appData.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Apps;
