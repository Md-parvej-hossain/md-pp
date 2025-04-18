import { FaBookReader } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
const Cart = () => {
  const educationData = [
    {
      year: '2013–2014',
      degree: 'M.Sc. In Information and Communication Technology',
      icon: <FaBookOpen className="w-6 h-6 text-yellow-400" />,
    },
    {
      year: '2012–2013',
      degree: 'M. Sc. In Physics',
      icon: <FaBookReader className="w-6 h-6 text-yellow-400" />,
    },
    {
      year: '2008–2012',
      degree: 'B. Sc. In Physics',
      icon: <FaBookOpen className="w-6 h-6 text-yellow-400" />,
    },
  ];
  return (
    <div className="bg-gray-900 text-white p-8  shadow-md  mx-auto my-10 rounded-4xl">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">EDUCATION</h2>
      <div className="space-y-6">
        {educationData.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div>{item.icon}</div>
            <div>
              <p className="text-sm text-gray-400">{item.year}</p>
              <p className="text-lg font-semibold">{item.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
