// import pro from '../assets/pro.jpg';
// import hero from '../../../public/hero.jpg';
import { NavLink } from 'react-router';
import pro from '../../../public/pro.jpg';
const Hero = () => {
  return (
    <div
      className="hero min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://i.ibb.co.com/ds4TrF7x/hero.jpg)',
        // backgroundImage: `url(${hero})`,
      }}
    >
      <div className="hero min-h-screen pt-20 lg:pt-0">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
          <div className="text-[#ffffff] ">
            <p className="font-semibold">Hello, My Name Is</p>
            <h1 className="text-5xl font-bold py-4 font-sans">MD PARVEJ</h1>
            <p className="text-[#F8B90C] text-lg font-semibold">
              I AM Web Developer
            </p>
            <p className="py-4 font-sans">
              From Dhaka, Bangladesh. I’m a Full stack Web developer who is
              passionate about making error-free websites. I am good at React. I
              love to talk with you about your unique.
            </p>
            <NavLink
              to={'/contacts'}
              className="btn btn-primary mt-2 bg-[#F8B90C] text-center items-center font-bold"
            >
              Download CV{' '}
              <span>
                <img
                  className="size-6 text-white"
                  src="https://img.icons8.com/?size=48&id=sXUnPq4XYR1D&format=png"
                  alt=""
                />
              </span>
            </NavLink>
            <NavLink
              to={'/contacts'}
              className="btn btn-primary bg-[#111122] mt-2 lg:ml-5 font-bold"
            >
              Scroll down
              <span>
                <img
                  className="size-6 text-white"
                  src="https://img.icons8.com/?size=52&id=39804&format=png"
                  alt=""
                />
              </span>
            </NavLink>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <img
              // src="https://i.ibb.co.com/ym8wVg49/Whats-App-Image-2025-02-05-at-15-55-02-80d5502e.jpg"
              src={pro}
              className="shadow-2xl object-cover rounded-full border-8 border-amber-300 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] lg:mr-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
