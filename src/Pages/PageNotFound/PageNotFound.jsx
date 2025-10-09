import React from 'react';
import { useNavigate } from 'react-router';
import PageFoundImg from '../../assets/error-404.png';

const PageNotFound = () => {
  const navigete = useNavigate();
  return (
    <div className="text-center space-y-4 my-20 ">
      <img src={PageFoundImg} alt="" className="mx-auto" />
      <h1 className="text-5xl font-bold text-[#001931]">
        Oops, page not found!{' '}
      </h1>
      <p className="text-[#627382]">
        The page you are looking for is not available.
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

export default PageNotFound;
