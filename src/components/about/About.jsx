import { FaLaptopCode } from 'react-icons/fa6';
import Cart from '../Cart';
const About = () => {
  return (
    <section
      id="about"
      className="about lg:w-11/12 mx-auto my-10 px-2 lg:px-10"
    >
      <div className="">
        <div>
          <h2 className="text-3xl font-bold text-[#F8B90C]">ABOUT ME</h2>
          <p className="text-white py-4">
            I’m a Front End Web developer who is passionate about making
            <span className="bg-amber-200 text-black font-semibold px-2">
              error-free websites
            </span>
            with 100% client satisfaction. I am passionate about learning and
            sharing my knowledge with others as publicly as possible. I love to
            solve real-world problems. I am strategic and goal-oriented, and I
            always work with an end goal in mind. Over the past years, I created
            100s of websites for my clients. I pride myself on doing quality
            work and maintaining excellent communication. Most of the time I
            work with ReactJs but some technologies I enjoy working with include
            MongoBD,ExpressJs,SQL,JavaScript,Python and PHP.
          </p>
        </div>
        <div className="text-white md:flex bg-[#1C2229] p-4 rounded-3xl mt-20 gap-6">
          <div>
            <FaLaptopCode className="text-[#F8B90C] text-6xl" />
          </div>
          <div>
            <p>2025 - Present</p>
            <h3>Web Development Farm</h3>
            <p>
              I am working Full Stack Developer and React Developer. My main job
              is to create a Website, customization, and create based on client
              needs.I try my best to satisfy the customer.
            </p>
          </div>
        </div>
        <Cart />
      </div>
    </section>
  );
};

export default About;
