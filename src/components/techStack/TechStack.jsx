import React from 'react';
import { FaFigma, FaCss3Alt, FaJsSquare, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { IoLogoHtml5 } from 'react-icons/io';
import { FaReact } from 'react-icons/fa6';
const techItems = [
  {
    name: 'Html',
    subtitle: 'Design tool',
    icon: IoLogoHtml5,
  },

  {
    name: 'CSS',
    subtitle: 'User Interface',
    icon: FaCss3Alt,
  },
  {
    name: 'JavaScript',
    subtitle: 'Interaction',
    icon: FaJsSquare,
  },
  {
    name: 'React',
    subtitle: 'Interaction',
    icon: FaReact,
  },
  {
    name: 'NodeJS',
    subtitle: 'Web Server',
    icon: FaNodeJs,
  },
  {
    name: 'ExpressJS',
    subtitle: 'Node Framework',
    icon: SiExpress,
  },
  {
    name: 'MongoDB',
    subtitle: 'Database',
    icon: SiMongodb,
  },
  {
    name: 'Figma',
    subtitle: 'Design tool',
    icon: FaFigma,
  },
];

const TechStack = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center text-white py-10">
        <h1 className="text-6xl font-bold py-2">Skill </h1>
        <p className="text-2xl font-bold text-[#F8B90C]">My inventiveness</p>
      </div>
      <div className="space-y-4">
        {techItems.map(({ name, subtitle, icon: IconComponent }) => (
          <div
            key={name}
            className="card card-side bg-base-200 border border-base-300 rounded-lg p-4 items-center "
          >
            <figure className="mr-4">
              <IconComponent size={32} />
            </figure>
            <div className="card-body p-0">
              <h2 className="card-title">{name}</h2>
              <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
