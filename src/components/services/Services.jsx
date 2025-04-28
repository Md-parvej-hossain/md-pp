import { FaFigma } from 'react-icons/fa6';
import { FaLaptopCode } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
const Services = () => {
  return (
    <section className="my-5 w-11/12 mx-auto px-10">
      <div className="text-center text-white py-10 ">
        <h1 className="text-6xl font-bold py-2">What I do </h1>
        <p className="text-2xl font-bold text-[#F8B90C]">My Services</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        <div className="card  bg-[#1C222A] text-white">
          <div className="card-body">
            <h2 className="card-title">
              <FaFigma className="text-4xl text-[#F8B90C]" />
            </h2>
            <h2 className="text-2xl font-bold">DESIGN SKILLS</h2>
            <p className="py-4">
              Proficient in Figma design, creating sleek user interfaces and
              intuitive user experiences with a strong eye for aesthetics and
              usability.
            </p>
            <div className="card-actions justify-start">
              <button className="btn">
                Say Hello <FaArrowRight className="text-[#F8B90C]" />
              </button>
            </div>
          </div>
        </div>
        <div className="card  bg-[#1C222A] text-white">
          <div className="card-body">
            <h2 className="card-title">
              <FaLaptopCode className="text-4xl text-[#F8B90C]" />
            </h2>
            <h2 className="text-2xl font-bold">FRONT-END DEVELOPER </h2>
            <p className="py-2">
              I’m a Front End Web developer who is passionate about making
              error-free websites with 100% client satisfaction.
            </p>
            <div className="card-actions justify-start">
              <button className="btn">
                Say Hello <FaArrowRight className="text-[#F8B90C]" />
              </button>
            </div>
          </div>
        </div>
        <div className="card  bg-[#1C222A] text-white">
          <div className="card-body">
            <h2 className="card-title">
              <img
                src="https://img.icons8.com/?size=96&id=rVSB3GaDDURu&format=png"
                alt=""
                className="w-10"
              />
            </h2>

            <h2 className="text-2xl font-bold">PROBLEM SOLVING </h2>
            <p className="py-2">Provlame solving is my fabrite works.</p>
            <div className="card-actions justify-start">
              <button className="btn">
                Say Hello <FaArrowRight className="text-[#F8B90C]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
