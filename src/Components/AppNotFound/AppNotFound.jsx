import NotFoundImg from '../../assets/App-Error.png';
import { useNavigate } from 'react-router';

const AppNotFound = () => {
  const navigete = useNavigate();
  return (
    <div className="text-center space-y-4 mb-20 ">
      <img src={NotFoundImg} alt="" className="mx-auto" />
      <h1 className="text-5xl font-bold text-[#001931]">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-[#627382]">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <button
        onClick={() => navigete(-1)}
        className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
      >
        Go Back!
      </button>
    </div>
  );
};

export default AppNotFound;
