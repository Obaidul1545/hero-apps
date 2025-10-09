import { Link } from 'react-router';
import NotFoundImg from '../../assets/App-Error.png';

const NotInstall = () => {
  return (
    <div className="text-center space-y-4 mb-20 ">
      <img src={NotFoundImg} alt="" className="mx-auto w-100" />
      <h1 className="text-5xl font-bold text-[#001931]">
        OPPS!! NOT INSTALLED APP
      </h1>

      <Link
        to={'/apps'}
        className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
      >
        Go Apps!
      </Link>
    </div>
  );
};

export default NotInstall;
