import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pagess/Home/Home';
import About from '../components/about/About';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
