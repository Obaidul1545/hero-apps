import { Download, Star } from 'lucide-react';

const InstallAppCard = ({ appsData, handleUninstall }) => {
  const { title, ratingAvg, image, downloads, size, id } = appsData;
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-md">
      <div className="flex items-center gap-6">
        <img src={image} alt="" className="w-20 rounded-md" />
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#001931]">{title}</h3>
          <div className="flex items-center gap-3">
            <span className="text-[#00D390] inline-flex items-center gap-1">
              <Download size={20} /> {downloads}
            </span>
            <span className="text-[#FF8811] inline-flex items-center gap-1">
              <Star size={20} /> {ratingAvg}
            </span>
            <span className="text-[#627382]">{size}MB</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleUninstall(id)}
        className="btn text-white bg-[#00D390]"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallAppCard;
