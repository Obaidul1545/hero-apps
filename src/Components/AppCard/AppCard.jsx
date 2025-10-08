import imag from '../../assets/demo-1.webp';
import { Download, Star } from 'lucide-react';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
  const { title, ratingAvg, image, downloads, id } = app;

  return (
    <Link to={`/appDetails/${id}`}>
      <div className=" bg-base-100 rounded-lg shadow-sm p-4 hover:scale-105 transition ease-in-out">
        <figure className="">
          <img src={imag} alt="" className="w-full object-cover rounded-lg" />
        </figure>
        <div className="">
          <h2 className="text-base font-semibold my-3">{title}</h2>

          <div className="flex justify-between">
            <button
              className="inline-flex items-center gap-2 py-1 px-4 rounded
            bg-[#F1F5E8] text-[#00D390]"
            >
              <Download size={20} /> {downloads}
            </button>
            <button className="inline-flex items-center gap-2 py-1 px-4 rounded  bg-[#FFF0E1] text-[#FF8811]">
              <Star size={20} /> {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
