import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdLocalShipping, MdSupportAgent, MdAutorenew, MdPayment, } from "react-icons/md";
import { aboutSectionImg, farmImg } from "../assets/images";

const features = [
  {
    title: "Free Shipping",
    desc: "Free shipping on all US order or above $200",
    icon: <MdLocalShipping className="text-4xl text-orange-500 mx-auto mb-4" />,
  },
  {
    title: "24x7 Support",
    desc: "Contact us 24 hours a day, 7 days a week",
    icon: <MdSupportAgent className="text-4xl text-purple-500 mx-auto mb-4" />,
  },
  {
    title: "30 Days Return",
    desc: "Simply return it within 30 days for an exchange",
    icon: <MdAutorenew className="text-4xl text-green-500 mx-auto mb-4" />,
  },
  {
    title: "Payment Secure",
    desc: "Secure online payment methods",
    icon: <MdPayment className="text-4xl text-pink-500 mx-auto mb-4" />,
  },
]

const AboutUs = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover scale-105 filter blur-sm"
          style={{ backgroundImage: `url(${farmImg})` }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="backdrop-blur-md bg-black/60 p-4 md:p-8 rounded-xl max-w-2xl" data-aos="zoom-in">
            <h1 className="text-4xl font-bold mb-4">
              About <span className="text-blue-400">BlueBerry</span>
            </h1>
            <p className="text-sm md:text-base leading-relaxed">
              We connect you to farm-fresh, organic, and responsibly sourced food—delivered right to your doorstep.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 lg:px-20 py-10 bg-gray-100">
        <div className="lg:w-1/2" data-aos="fade-left">
          <img src={aboutSectionImg} alt="about image" />
        </div>
        <div className="lg:w-1/2" data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-2">
            About The <span className="text-blue-600">BlueBerry</span>
          </h2>
          <p className="italic text-gray-600 mb-4">Farm-fresh Goodness, just a click Away.</p>
          <p className="text-sm text-gray-700 mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rem!
          </p>
          <p className="text-sm text-gray-700">
            Ab optio doloribus hic quas sit corporis numquam.
          </p>
          <div className="flex gap-8 mt-6">
            <div>
              <p className="text-2xl font-bold text-gray-900">200+</p>
              <p className="text-gray-500 text-sm">Vendors</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">654k+</p>
              <p className="text-gray-500 text-sm">Sales</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">587k+</p>
              <p className="text-gray-500 text-sm">Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-2" data-aos="fade-up">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p
          className="text-sm text-gray-600 mb-12 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Customer service should not be a department. It should be the entire company.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-lg shadow border border-b-gray p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={idx * 100}
            >
              {item.icon}
              <p className="font-bold text-gray-800 text-base mb-1">{item.title}</p>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
