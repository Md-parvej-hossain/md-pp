import { Outlet } from 'react-router';
import Navber from '../components/navber/Navber';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
  return (
    <div className="">
      <Navber />
      <div className="min-h-screen w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
