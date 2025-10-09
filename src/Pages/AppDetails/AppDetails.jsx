import { useParams } from 'react-router';
import useAppsData from '../../Hooks/useAppsData';
import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
import reviewImg from '../../assets/icon-review.png';
import img from '../../assets/demo-app(2).webp';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { addToStoreDB } from '../../utility/addToDB';

const AppDetails = () => {
  const { id } = useParams();
  const { appData, loading } = useAppsData();

  const app = appData.find((p) => p.id === Number(id));
  const {
    companyName,
    description,
    downloads,
    image,
    ratingAvg,
    ratings,
    reviews,
    title,
    size,
  } = app || {};
  const ratingReverse = ratings ? [...ratings].reverse() : [];

  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="flex flex-col md:flex-row gap-10 items-center px-2 md:px-0">
        <div className="flex-shrink-0">
          <img
            src={img}
            alt=""
            className="h-75 w-75 object-contain shadow-xl mx-auto"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-[#001931] ">{title}</h1>
          <p className="text-[#627382]">
            Developed By:{' '}
            <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {companyName}
            </span>
          </p>
          <hr className="text-[#001931] opacity-30 my-7" />
          <div className="flex justify-between md:justify-start md:gap-20 text-center">
            <div className="space-y-1">
              <img src={downloadImg} alt="" className="mx-auto" />
              <p className="text-[#001931]">Downloads</p>
              <h3 className="text-[#001931] text-4xl font-bold">{downloads}</h3>
            </div>
            <div className="space-y-1">
              <img src={ratingImg} alt="" className="mx-auto" />
              <p className="text-[#001931]">Average Ratings</p>
              <h3 className="text-[#001931] text-4xl font-bold">{ratingAvg}</h3>
            </div>
            <div className="space-y-1">
              <img src={reviewImg} alt="" className="mx-auto" />
              <p className="text-[#001931]">Total Reviews</p>
              <h3 className="text-[#001931] text-4xl font-bold">{reviews}</h3>
            </div>
          </div>
          <button
            onClick={() => addToStoreDB(id)}
            className="btn bg-[#00D390] text-white mt-8"
          >
            Install Now ({size}MB){' '}
          </button>
        </div>
      </div>

      <hr className="text-[#001931] opacity-30 my-7" />

      <div>
        <h3 className="text-2xl text-[#001931] font-semibold">Ratings </h3>
      </div>
      {/* chart */}
      <div className="my-6">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={ratingReverse} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={60} />
            <Tooltip />

            <Bar
              dataKey="count"
              fill="#FF8811"
              barSize={30}
              radius={[0, 4, 4, 0]}
            ></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <hr className="text-[#001931] opacity-30 my-7" />

      <div>
        <h3 className="text-2xl text-[#001931] font-semibold">Description </h3>
        <p className="text-[#627382] text-justify mt-5 px-1 md:px-0">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
