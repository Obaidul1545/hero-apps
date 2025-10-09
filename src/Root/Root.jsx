import { ToastContainer } from 'react-toastify';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#f5f5f5]">
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer className="mt-8" position="top-center" autoClose={2000} />
    </div>
  );
};

export default Root;
